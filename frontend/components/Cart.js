import React from "react";
import { useStateContext } from "../lib/context";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Cart = () => {
  const { setShowCart, cartItems } = useStateContext();
  return (
    <div
      id="cart-wrapper"
      className="bg-black/[0.6] h-screen w-screen fixed right-0 top-0 flex justify-end"
      onClick={() => setShowCart(false)}>
      <section
        id="cart"
        className="h-screen w-1/3 bg-gray-100 opacity-100 py-5 flex flex-col"
        onClick={(e) => e.stopPropagation()}>
        {/* Map Over Products to Display Cards */}

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
                    <FaMinusCircle />
                  </button>
                  <p className="mx-2">{item.quantity}</p>
                  <button>
                    <FaPlusCircle />
                  </button>
                </div>
              </div>
            </div>
          ))}

        <button className="w-max self-center mt-10 px-12 py-3 bg-black text-white">
          Checkout
        </button>
      </section>
    </div>
  );
};

export default Cart;
