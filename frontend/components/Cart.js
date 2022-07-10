import React from "react";
import { useStateContext } from "../lib/context";

const Cart = () => {
  const { setShowCart } = useStateContext();
  return (
    <div
      id="cart-wrapper"
      className="bg-black/[0.6] h-screen w-screen fixed right-0 top-0 flex justify-end"
      onClick={() => setShowCart(false)}>
      <section
        id="cart"
        className="h-screen w-1/3 bg-gray-100 opacity-100"
        onClick={(e) => e.stopPropagation()}>
        <div id="item-card" className="flex bg-yellow-400 w-3/4 mx-auto mt-12">
          <div className="bg-blue-400 h-12 w-12"></div>
          <div>
            <h3>Product Title</h3>
            <div className="flex">
              <h4>Quantity</h4>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
