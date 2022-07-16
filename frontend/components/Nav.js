import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";
const { AnimatePresence, motion } = require("framer-motion");

const Nav = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-green-500 shadow-lg">
      <div className="flex items-center justify-between my-3 mx-12 ">
        <h4 className="cursor-pointer text-slate-100 font-display">
          <a href="/" className="font-display text-3xl">
            Deb's Designs
          </a>
        </h4>
        <div
          className="flex items-center gap-2 cursor-pointer text-green-500 relative"
          onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-red-500 text-gray-100 rounded-xl h-5 w-5 p-2 text-xs absolute -bottom-2 -left-2 flex justify-center items-center">
              {totalQuantities}
            </motion.span>
          )}
          <FiShoppingCart className="text-2xl text-slate-100" />
          <h4 className="text-slate-100">Cart</h4>
        </div>
      </div>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </nav>
  );
};

export default Nav;
