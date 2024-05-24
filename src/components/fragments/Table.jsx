"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import { getProducts } from "@/services/product-service";
import Image from "next/image";

export default function Table() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(({ data }) => {
      setProducts(data);
    });
  }, []);

  return (
    <table className="table-fixed">
      <thead className="border border-slate-300 table-row">
        <tr className="bg-slate-300 text-black w-full">
          <th className="border border-slate-300 w-1/12">No</th>
          <th className="w-2/12">Nama</th>
          <th className="w-2/12">Email</th>
          <th className="w-2/12">Price</th>
          <th className="w-2/12">Category</th>
          <th className="w-1/12">Available</th>
          <th className="w-2/12">Description</th>
          <th className="w-2/12">Created At</th>
          <th className="w-2/12">Updated At</th>
          <th className="w-1/12">Option</th>
        </tr>
      </thead>
      <tbody className="table-row">
        {products.map((product, index) => (
          <tr key={index}>
            <td className="border border-slate-300">{index + 1}</td>
            <td className="border border-slate-300">{product.title}</td>
            <td className="border border-slate-300">
              <Image
                src={product.image}
                alt={product.title}
                width={50}
                height={50}
              />
            </td>
            <td className="border border-slate-300">{product.price}</td>
            <td className="border border-slate-300">{product.category}</td>
            <td className="border border-slate-300">{product.isAvailable}</td>
            <td className="border border-slate-300">
              <p className="text-wrap w-52">{product.description}</p>
            </td>
            <td className="border border-slate-300">{product.createdAt}</td>
            <td className="border border-slate-300">{product.updatedAt}</td>
            <td className="border border-slate-300 px-4">
              <Button>Edit</Button>
              <Button>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
