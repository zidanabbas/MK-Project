import React from "react";
import Layouts from "@/components/layouts/BodyLayouts/page";
import ContainerSection from "@/components/layouts/SectionLayouts/page";
import CartItem from "@/components/fragments/CartItem";

export default function CartPage() {
  return (
    <Layouts>
      <ContainerSection>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 md:py-16 lg:py-20 xl:py-24">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-Headline">
            Your Shopping Cart
          </h1>
          {/* Cart items */}
          <CartItem />
        </div>
      </ContainerSection>
    </Layouts>
  );
}
