import React from "react";
import CartItemBody from "@/components/fragments/CartItemBody/CartItemBody";
import Button from "@/components/ui/Button/Button";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function CartItem({
  src,
  alt,
  title,
  price,
  quantity,
  onClick,
  id,
}) {
  return (
    <div className="flex items-center  justify-evenly ">
      <div className="w-full max-w-2xl p-4 bg-white rounded-lg shadow-md my-3 relative">
        <Button
          classname={
            "absolute bg-transparent flex justify-center top-0 right-0 items-center"
          }
          onClick={onClick}
        >
          <IoIosCloseCircleOutline size={20} />
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
    </div>
  );
}
