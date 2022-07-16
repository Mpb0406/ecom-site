import { useEffect } from "react";
import { useQuery } from "urql";
import { GET_PRODUCT } from "../../lib/query";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useStateContext } from "../../lib/context";

const ProductDetails = () => {
  const { query } = useRouter();
  const [results] = useQuery({
    query: GET_PRODUCT,
    variables: { slug: query.slug },
  });
  const { data, error, fetching } = results;

  const { increaseQty, decreaseQty, qty, addToCart, setQty } =
    useStateContext();

  useEffect(() => {
    setQty(1);
  }, []);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  const product = data.products.data[0].attributes;

  return (
    <div className="mt-24 flex flex-col md:flex-row items-center justify-between mx-12">
      <Head>
        <title>{product.title}</title>
      </Head>

      <Image
        src={product.image.data.attributes.formats.small.url}
        width="500"
        height="400"
        alt=""
      />
      <div className="md:mx-12 mt-10 md:mt-0 text-center flex flex-col h-64">
        <h3 className="text-3xl font-bold">{product.title}</h3>
        <p className="pt-3 pb-10 mb-12 md:mb-6">{product.description}</p>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex w-full items-center justify-start">
              <h3 className="text-xl md:text-lg font-bold text-gray-500">
                Quantity
              </h3>
              <div className="w-1/2 flex items-center justify-around md:px-6">
                <button onClick={decreaseQty}>
                  <FaMinusCircle className="text-gray-500 text-2xl md:text-xl" />
                </button>
                <span className="text-xl md:text-lg font-bold">{qty}</span>
                <button onClick={increaseQty}>
                  <FaPlusCircle className="text-gray-500 text-2xl md:text-xl" />
                </button>
              </div>
            </div>
            <p className="text-2xl font-bold">${product.price}</p>
          </div>

          <button
            className="bg-green-400 my-5 w-full px-4 py-2"
            onClick={() => addToCart(data.products.data[0].attributes, qty)}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
