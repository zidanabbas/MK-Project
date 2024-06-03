import React from "react";

export default function Summary({ cart, totalPrice }) {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-Headline rounded-lg shadow-xl py-2 px-4">
      <h1 className="text-sm sm:text-3xl md:text-4xl lg:text-2xl font-bold text-white">
        Summary
      </h1>
      <table className="w-full max-w-2xl p-4 my-3 table-auto">
        <thead className="border-b text-white">
          <tr>
            <th className="text-sm font-normal">Name Product</th>
            <th className="text-sm font-normal">Quantity</th>
            <th className="text-sm font-normal">Price</th>
          </tr>
        </thead>
        <tbody className="text-white text-center">
          {cart.map((cart) => (
            <tr key={cart.id} className="border-b">
              <td>{cart.title}</td>
              <td>{cart.quantity}</td>
              <td>{cart.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between items-center gap-4 px-2 w-full">
        <span className="text-md font-bold text-white">
          Total : {totalPrice}
        </span>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none">
          Checkout
        </button>
      </div>
    </div>
  );
}
