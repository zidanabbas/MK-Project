import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.data);
  return (
    <button className="flex items-center justify-center p-2 relative w-14 text-center">
      <span className="absolute top-0 right-2 rounded-full bg-red-700 w-5 mt-1">
        {cartItems.length}
      </span>
      <AiOutlineShoppingCart size={25} />
    </button>
  );
}
