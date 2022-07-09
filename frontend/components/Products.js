import React from "react";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const Products = ({ product }) => {
  const { title, price, image, slug } = product.attributes;
  return (
    <div>
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
          <button className="text-sm font-bold text-red-400 mx-2 flex items-center gap-2">
            <FiShoppingCart />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
