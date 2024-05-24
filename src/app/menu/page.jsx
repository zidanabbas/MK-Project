"use client";
import React from "react";

import { getProducts } from "@/services/product-service";
import { useState, useEffect } from "react";
import Link from "next/link";
import CardMenu from "@/components/fragments/CardMenu";
import BackButton from "@/components/fragments/BackButton";

export default function PageMenu() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await getProducts(({ data }) => {
          setProducts(data);
        });
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };
    fetchProducts();
  }, []);

  // filter menu
  useEffect(() => {
    if (products.length > 0) {
      const filteredMenu = products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResult(filteredMenu);
    }
  }, [search, products]);

  return (
    <>
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="mb-8 md:mb-12 lg:mb-16 bg-Headline rounded-lg px-7 py-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Our Delicious Menu
          </h1>
          <div className="mt-2 md:mt-3 lg:mt-4 text-white">
            Explore our wide selection of mouthwatering dishes.
          </div>
        </div>
        <BackButton href={"/"} />
        <div className="flex items-center mb-6 md:mb-8 lg:mb-10 max-w-80">
          <div className="flex flex-col gap-2 w-full">
            <h4 className="text-gray-700 font-poppins">Search Products :</h4>
            <input
              className="w-full bg-gray-300 p-2 rounded-lg focus:outline-none shadow-none text-gray-900 font-poppins"
              placeholder="Search menu items..."
              type="search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 place-items-center md:gap-10 items-center px-4 py-2">
          {searchResult.map((product) => (
            <Link href={`/menu/${product.id}`} key={product.id}>
              <CardMenu key={product.id}>
                <CardMenu.Header alt={product.title} src={product.image} />
                <CardMenu.Body title={product.title}>
                  {product.description}
                </CardMenu.Body>
                <CardMenu.Footer price={product.price} />
              </CardMenu>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
