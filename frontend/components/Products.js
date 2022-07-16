import React from "react";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useStateContext } from "../lib/context";

const Products = ({ product }) => {
  const { title, price, image, slug } = product.attributes;

  const { addToCart } = useStateContext();
  return (
    <div className="my-10 bg-white p-3 rounded-md hover:shadow-xl duration-300">
      <Link href={`/product/${slug}`}>
        <img
          className="rounded-sm w-72 cursor-pointer"
          src={image.data.attributes.formats.small.url}
          alt={slug}
        />
      </Link>
      <div className="my-3">
        <h2 className="font-bold text-md">{title}</h2>
        <div className="flex items-center justify-between">
          <p className="text-md font-bold text-gray-500 mx-1">${price}</p>
          <button
            className="text-sm font-bold text-green-500 hover:text-green-600 duration-200 mx-2 flex items-center gap-2"
            onClick={() => addToCart(product.attributes, 1)}>
            <FiShoppingCart />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
