"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { getProducts } from "@/services/product-service";
import Image from "next/image";

export default function Table() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(({ data }) => {
      setProducts(data);
    });
  }, []);

  const convertToWib = (dateString) => {
    const date = new Date(dateString);

    const wibDate = new Date(date.getTime() + 7 * 60 * 60 * 1000);
    const dateFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    const timeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timezone: "Asia/Jakarta",
    };
    const formattedDate = wibDate.toLocaleDateString(
      "id-ID",
      dateFormatOptions
    );
    const formattedTime = wibDate.toLocaleTimeString(
      "id-ID",
      timeFormatOptions
    );
    return `${formattedDate}, ${formattedTime}`;
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="bg-slate-300 text-black">
          <tr>
            <th className="p-2 w-1/12">No</th>
            <th className="p-2 w-2/12">Name</th>
            <th className="p-2 w-2/12">Image</th>
            <th className="p-2 w-2/12">Price</th>
            <th className="p-2 w-2/12">Category</th>
            <th className="p-2 w-1/12">Available</th>
            <th className="p-2 w-2/12">Description</th>
            <th className="p-2 w-2/12">Created At</th>
            <th className="p-2 w-2/12">Updated At</th>
            <th className="p-2 w-1/12">Option</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="border-b">
              <td className="p-2 text-center">{index + 1}</td>
              <td className="p-2">{product.title}</td>
              <td className="p-2">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={50}
                  height={50}
                  className="mx-auto"
                />
              </td>
              <td className="p-2">{product.price}</td>
              <td className="p-2">{product.category}</td>
              <td className="p-2">{product.isAvailable ? "Yes" : "No"}</td>
              <td className="p-2">
                <p className="text-wrap w-full">
                  {product.description.length > 20
                    ? `${product.description.substring(0, 20)} ...`
                    : product.description}
                </p>
              </td>
              <td className="p-2">{convertToWib(product.createdAt)}</td>
              <td className="p-2">{convertToWib(product.updatedAt)}</td>
              <td className="p-2 flex justify-center space-x-2">
                <Button>Edit</Button>
                <Button>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
