import React from "react";
const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
import { useRouter } from "next/router";

export async function getServerSideProps(params) {
  const order = await stripe.checkout.sessions.retrieve(
    params.query.session_id,
    {
      expand: ["line_items"],
    }
  );
  return { props: { order } };
}

const success = ({ order }) => {
  const route = useRouter();

  return (
    <div className="mt-20 md:w-3/4 w-full mx-auto p-12 flex flex-col items-center rounded-md ">
      <div className="text-center md:text-left">
        <h1 className="text-3xl">Thanks for your order</h1>
        <h3 className="text-xl my-2">
          A confirmation email has been sent to:{" "}
        </h3>
        <p>{order.customer_details.email}</p>
        <div className="my-3">
          <h3 className="font-bold">Shipping Address: </h3>
          {Object.entries(order.customer_details.address).map(([key, val]) => (
            <p key={key}>
              {key} : {val}
            </p>
          ))}
        </div>
        <div>
          <h3 className="font-bold">Order Info</h3>
          {order.line_items.data.map((item) => (
            <div key={item.id}>
              <p>Product: {item.description}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price.unit_amount}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => route.push("/")}
          className="px-6 py-3 mt-6 bg-green-400 text-white hover:bg-green-500 duration-200">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default success;
