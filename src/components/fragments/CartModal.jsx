import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItemBody from "./CartItemBody/CartItemBody";

export default function CartModal() {
  const cartItems = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartItems.length > 0) {
      const sum = cartItems.reduce((acc, item) => {
        const cart = cartItems.find((cart) => cart.id === item.id);
        return acc + (cart ? cart.price * item.quantity : 0);
      }, 0);
      setTotalPrice(sum);
      // localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      setTotalPrice(0);
    }
  }, [cartItems]);

  return (
    <div className="absolute w-full lg:w-2/5 text-center top-12 right-0 bg-slate-100 p-2 rounded-b-lg ">
      <h2 className="text-xl font-bold mx-2 my-4 text-Headline">
        Your Shopping Cart
      </h2>
      <div className="w-full max-w-2xl p-4 bg-transparent rounded-lg my-3">
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <CartItemBody
                key={item.id}
                src={item.image}
                alt={item.alt}
                title={item.title}
                quantity={item.quantity}
                price={item.price}
                id={item.id}
              />
            ))}
          </ul>
        )}
      </div>
      <div className="mt-4 flex justify-between items-center gap-6 px-4">
        <span className="text-lg font-bold">Total: Rp. {totalPrice}</span>
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none">
          <Link href={"/menu/checkout"}>Checkout</Link>
        </button>
      </div>
    </div>
  );
}
