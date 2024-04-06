"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import getProducts from "@/services/product-service";

export default function CardProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  });
  return (
    <>
      {products.map((product) => (
        <div
          className="card max-w-80 max-h-96 bg-base-100 shadow-xl overflow-hidden"
          key={product.id}
        >
          <figure>
            <Image
              src={product.image}
              alt="Nasi Goreng Udang"
              className="object-cover w-full max-h-52"
              width={500}
              height={500}
            />
          </figure>
          <div className="card-body max-w-72 p-4 mt-2 rounded-b-xl">
            <div className="w-full flex justify-between items-center ">
              <h2 className="card-title text-md text-white">{product.title}</h2>
              <div className="badge badge-secondary">Popular</div>
            </div>
            <p className="text-md text-pretty line-clamp-3 md:line-clamp-none">
              {product.description}
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline text-white">
                {product.price}
              </div>
              <div className="badge badge-outline">{product.category}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
