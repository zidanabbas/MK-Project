"use client";
import React, { useState, useEffect } from "react";
import Layouts from "@/components/layouts/BodyLayouts/page";
import CartItem from "@/components/fragments/Cart/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/lib/redux/slices/cartSlices";
import Summary from "@/components/fragments/Summary";

export default function Checkout() {
  const cart = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = cart.find((product) => product.id === item.id);
        return acc + (product ? product.price * item.quantity : 0);
      }, 0);
      setTotalPrice(sum);
    } else {
      setTotalPrice(0);
    }
  }, [cart]);

  return (
    <Layouts>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 md:py-16 lg:py-20 xl:py-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-Headline">
          Your Shopping Cart
        </h1>
        <div className="flex flex-col gap-5 justify-evenly items-center md:flex-row md:items-start py-5 mt-4">
          <div className="w-2/4">
            {cart.map((cart) => (
              <CartItem
                key={cart.id}
                id={cart.id}
                src={cart.image}
                alt={cart.title}
                title={cart.title}
                price={cart.price}
                quantity={cart.quantity}
                product={cart.id}
                onClick={() => dispatch(removeFromCart(cart.id))}
              />
            ))}
          </div>
          <div className="w-2/4 md:w-1/4">
            <Summary cart={cart} totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </Layouts>
  );
}
