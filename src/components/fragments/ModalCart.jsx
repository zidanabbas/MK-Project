import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItemBody from "./CartItemBody/CartItemBody";

export default function ModalCart() {
  const cartItems = useSelector((state) => state.cart.data);
  const products = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartItems.length > 0 && products.length > 0) {
      const sum = cartItems.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + (product ? product.price * item.quantity : 0);
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, products]);

  return (
    <div className="absolute top-10 bg-transparent backdrop-blur-lg p-2 rounded-b-lg">
      <h2 className="text-xl font-bold mb-4 text-Headline">
        Your Shopping Cart
      </h2>
      <div className="w-full max-w-2xl p-4 bg-white rounded-lg shadow-md my-3">
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => {
              const product = products.find(
                (product) => product.id === item.id
              );
              return (
                <CartItemBody
                  key={item.id}
                  src={product.image}
                  alt={product.alt}
                  title={product.title}
                  quantity={item.quantity}
                  price={product.price}
                />
              );
            })}
          </ul>
        )}
      </div>
      <div className="mt-4 flex justify-between items-center gap-6 px-4">
        <span className="text-lg font-bold">Total: Rp. {totalPrice}</span>
        <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none">
          <Link href={"/menu/cart"}>Checkout</Link>
        </button>
      </div>
    </div>
  );
}
