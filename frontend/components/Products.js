import React from "react";

const Products = ({ product }) => {
  return (
    <div>
      <img
        src={product.attributes.image.data.attributes.formats.thumbnail.url}
        alt={product.attributes.slug}
      />
      <h2>{product.attributes.title}</h2>
      <p>{product.attributes.description}</p>
      <p>{product.attributes.price}</p>
    </div>
  );
};

export default Products;
