import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full">
      <div className="flex items-center justify-between my-6 mx-12 ">
        <h4 className="cursor-pointer">Deb's Designs</h4>
        <div className="flex items-center gap-2 cursor-pointer">
          <FiShoppingCart className="text-2xl" />
          <h4>Cart</h4>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
