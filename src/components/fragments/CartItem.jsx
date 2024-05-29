import React from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export default function CartItem() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="w-full max-w-2xl p-4 bg-white rounded-lg shadow-md">
        <ul className="divide-y divide-gray-200">
          {/* Example of cart items */}
          <li className="flex justify-between items-center p-3">
            <div className="flex items-center">
              <img
                src="https://i.pinimg.com/236x/94/82/ab/9482ab2e248d249e7daa7fd6924c8d3b.jpg"
                alt="Product Name"
                className="h-16 w-16 rounded"
              />
              <span className="ml-4 text-sm font-medium">Nasi Goreng</span>
            </div>
            <div className="flex items-center">
              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                <CiCircleMinus size={28} />
              </button>
              <span className="text-sm font-medium mx-2">1</span>
              <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                <CiCirclePlus size={30} />
              </button>
            </div>
            <span className="text-sm font-medium">$20.00</span>
          </li>
          {/* Repeat for other cart items */}
        </ul>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold">Total: $120.00</span>
          <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
