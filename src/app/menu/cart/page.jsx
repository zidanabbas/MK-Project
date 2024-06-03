"use client";
import React, { useState, useEffect } from "react";
import Layouts from "@/components/layouts/BodyLayouts/page";
import ContainerSection from "@/components/layouts/SectionLayouts/page";
import CartItem from "@/components/fragments/Cart/CartItem";
import { useSelector, useDispatch } from "react-redux";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = cart.find((product) => product.id === item.id);
        return acc + (product ? product.price * item.quantity : 0);
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <Layouts>
      <ContainerSection>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 md:py-16 lg:py-20 xl:py-24">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-Headline">
            Your Shopping Cart
          </h1>
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
              onClick={() => dispatch()}
              totalPrice={cart.totalPrice}
            />
          ))}
        </div>
      </ContainerSection>
    </Layouts>
  );
}
