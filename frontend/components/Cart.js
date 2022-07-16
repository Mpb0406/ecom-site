import React from "react";
import { useStateContext } from "../lib/context";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import getStripe from "../lib/getStripe";
const { motion } = require("framer-motion");

const Cart = () => {
  const { cartItems, setShowCart, addToCart, onRemove, totalPrice } =
    useStateContext();

  // Stripe Payments
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItems),
    });
    const data = await response.json();
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  // Framer Motion
  const card = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  const cards = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="cart-wrapper"
      className="bg-black/[0.6] h-screen w-screen fixed right-0 top-0 flex justify-end"
      onClick={() => setShowCart(false)}>
      <motion.section
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        exit={{ x: "90%" }}
        id="cart"
        className="h-screen w-1/3 bg-gray-100 opacity-100 py-5 flex flex-col"
        onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 400 }}
            className="h-full flex flex-col items-center justify-center">
            <h1 className="my-3 text-3xl">No Items in cart</h1>
            <FiShoppingCart className="text-6xl" />
          </motion.div>
        )}

        <motion.div
          variants={cards}
          initial="hidden"
          animate="show"
          layout
          transition={{ staggerChildren: 0.1 }}>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <motion.div
                layout
                variants={card}
                id="item-card"
                className="flex bg-zinc-200 w-3/4 mx-auto mt-5 p-3 rounded-sm">
                <img
                  src={item.image.data.attributes.formats.thumbnail.url}
                  alt={item.title}
                  className="h-16"
                />
                <div className="mx-3">
                  <h3 className="font-bold text-sm">{item.title}</h3>
                  <div className="flex mt-3 items-center">
                    <h4 className="text-xs font-bold text-zinc-600 mr-3">
                      Quantity
                    </h4>
                    <button>
                      <FaMinusCircle onClick={() => onRemove(item)} />
                    </button>
                    <p className="mx-2">{item.quantity}</p>
                    <button>
                      <FaPlusCircle onClick={() => addToCart(item, 1)} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {cartItems.length >= 1 && (
          <motion.div layout className="self-center">
            <h4 className="self-center mt-10 font-bold text-lg">
              Total Price: ${totalPrice}
            </h4>

            <button
              className="w-max self-center mt-10 px-12 py-3 bg-black text-white"
              onClick={handleCheckout}>
              Checkout
            </button>
          </motion.div>
        )}
      </motion.section>
    </motion.div>
  );
};

export default Cart;
