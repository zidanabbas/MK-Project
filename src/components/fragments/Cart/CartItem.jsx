import React from "react";
import CartItemBody from "@/components/fragments/CartItemBody/CartItemBody";
import Button from "@/components/ui/Button/Button";

export default function CartItem({
  src,
  alt,
  title,
  price,
  quantity,
  onClick,
  id,
  totalPrice,
}) {
  return (
    <div className="flex items-center mt-4  justify-evenly ">
      <div className="w-full max-w-2xl p-4 bg-white rounded-lg shadow-md my-3 relative">
        <Button
          classname={
            "absolute bg-transparent flex justify-center top-0 w-6 h-6 right-0 items-center"
          }
          onClick={onClick}
        >
          x
        </Button>
        <ul className="divide-y divide-gray-200">
          <CartItemBody
            src={src}
            alt={alt}
            title={title}
            price={price}
            quantity={quantity}
            id={id}
          />
        </ul>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold">{totalPrice}</span>
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none">
          Checkout
        </button>
      </div>
    </div>
  );
}
