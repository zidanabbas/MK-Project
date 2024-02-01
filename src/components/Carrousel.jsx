import React from "react";
import CardProduct from "./card/CardProduct";

export default function Carrousel() {
  return (
    <div className="min-w-full carousel carousel-center max-w-md p-4 space-x-4 bg-slate-100">
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
