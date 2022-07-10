import React from "react";
import { useQuery } from "urql";
import { GET_PRODUCT } from "../../lib/query";
import { useRouter } from "next/router";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const ProductDetails = () => {
  const { query } = useRouter();
  const [results] = useQuery({
    query: GET_PRODUCT,
    variables: { slug: query.slug },
  });
  const { data, error, fetching } = results;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  const product = data.products.data[0].attributes;
  console.log(product);
  return (
    <div className="mt-24 flex items-center justify-between mx-12">
      <img src={product.image.data.attributes.formats.small.url} alt="" />
      <div className="mr-24 flex flex-col h-64">
        <h3 className="text-2xl">{product.title}</h3>
        <p className="pt-3 pb-10">{product.description}</p>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex w-1/3 items-center justify-between">
              <p>Quantity</p>
              <button>
                <FaMinusCircle />
              </button>
              <span>1</span>
              <button>
                <FaPlusCircle />
              </button>
            </div>
            <p>${product.price}</p>
          </div>

          <button className="bg-green-400 my-5 w-full px-4 py-2">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
