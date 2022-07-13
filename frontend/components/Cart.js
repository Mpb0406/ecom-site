import React from "react";
import { useStateContext } from "../lib/context";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  const { cartItems, setShowCart, addToCart, onRemove, totalPrice } =
    useStateContext();
  return (
    <div
      id="cart-wrapper"
      className="bg-black/[0.6] h-screen w-screen fixed right-0 top-0 flex justify-end"
      onClick={() => setShowCart(false)}>
      <section
        id="cart"
        className="h-screen w-1/3 bg-gray-100 opacity-100 py-5 flex flex-col"
        onClick={(e) => e.stopPropagation()}>
        {cartItems.length < 1 && (
          <div className="h-full flex flex-col items-center justify-center">
            <h1 className="my-3 text-2xl">No Items in cart</h1>
            <FiShoppingCart className="text-6xl" />
          </div>
        )}

        {cartItems.length >= 1 &&
          cartItems.map((item) => (
            <div
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
            </div>
          ))}

        {cartItems.length >= 1 && (
          <div className="self-center">
            <h4 className="self-center mt-10 font-bold text-lg">
              Total Price: ${totalPrice}
            </h4>

            <button className="w-max self-center mt-10 px-12 py-3 bg-black text-white">
              Checkout
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
