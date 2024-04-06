"use client";
import React, { useEffect, useState } from "react";
import CardMenu from "./CardMenu";
import getProducts from "@/services/product-service";

export default function Carrousel() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  });
  return (
    <div className="carousel carousel-end rounded-box gap-4">
      {products.map((product) => (
        <div className="carousel-item" key={product.id}>
          <CardMenu key={product.id}>
            <CardMenu.Header alt={product.title} src={product.image} />
            <CardMenu.Body title={product.title}>
              {product.description}
            </CardMenu.Body>
            <CardMenu.Footer price={product.price} />
          </CardMenu>
        </div>
      ))}
    </div>
  );
}
