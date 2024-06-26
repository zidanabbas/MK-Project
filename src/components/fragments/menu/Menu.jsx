"use client";
import React, { useEffect, useState } from "react";
import CardMenu from "../fragments/CardMenu";
import { getProducts } from "@/services/product-service";
import Link from "next/link";

export default function Menu() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="p-2 grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          {products.map((product) => (
            <Link href={`/menu/${product.id}`} key={product.id}>
              <CardMenu key={product.id}>
                <CardMenu.Header
                  alt={product.title}
                  src={product.image}
                  id={product.id}
                />
                <CardMenu.Body title={product.title}>
                  {product.description}
                </CardMenu.Body>
                <CardMenu.Footer price={product.price} />
              </CardMenu>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
