import React from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "@/lib/redux/slices/cartSlices";

export default function CartItemBody({ src, alt, title, quantity, price, id }) {
  const dispatch = useDispatch();
  return (
    <li className="flex justify-between items-center p-3">
      <div className="min-w-72 flex items-center">
        <Image
          src={src}
          alt={alt}
          className="h-16 w-16 rounded"
          width={500}
          height={500}
        />
        <span className="ml-4 text-sm font-medium">{title}</span>
      </div>
      <div className="flex w-24 justify-between items-center">
        <button
          className="text-gray-500 focus:outline-none focus:text-gray-600"
          onClick={() => dispatch(decrementQuantity(id))}
        >
          <CiCircleMinus size={28} />
        </button>
        <span className="text-sm font-medium mx-2">{quantity}</span>
        <button
          className="text-gray-500 focus:outline-none focus:text-gray-600"
          onClick={() => dispatch(incrementQuantity(id))}
        >
          <CiCirclePlus size={30} />
        </button>
      </div>
      <span className="text-sm font-medium px-2">Rp. {price}</span>
    </li>
  );
}
