import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";

const Nav = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <nav className="fixed top-0 left-0 w-full z-10">
      <div className="flex items-center justify-between my-6 mx-12 ">
        <h4 className="cursor-pointer text-green-500 font-bold text-lg">
          <a href="/">Deb's Designs</a>
        </h4>
        <div
          className="flex items-center gap-2 cursor-pointer text-green-500 relative"
          onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && (
            <span className="bg-red-500 text-gray-100 rounded-xl h-5 w-5 p-2 text-xs absolute -bottom-2 -left-2 flex justify-center items-center">
              {totalQuantities}
            </span>
          )}
          <FiShoppingCart className="text-2xl" />
          <h4>Cart</h4>
        </div>
      </div>
      {showCart && <Cart />}
    </nav>
  );
};

export default Nav;
