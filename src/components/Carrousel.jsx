import React from "react";
import CardProduct from "./card/CardProduct";

export default function Carrousel() {
  return (
    <div className="min-w-full h-[500px] carousel carousel-center max-w-md p-4 space-x-4 bg-transparent">
      <div className="carousel-item">
        <CardProduct />
      </div>
      <div className="carousel-item">
        <CardProduct />
      </div>
      <div className="carousel-item">
        <CardProduct />
      </div>
      <div className="carousel-item">
        <CardProduct />
      </div>
      <div className="carousel-item">
        <CardProduct />
      </div>
      <div className="carousel-item">
        <CardProduct />
      </div>
      <div className="carousel-item">
        <CardProduct />
      </div>
    </div>
  );
}
