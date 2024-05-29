"use client";
import React from "react";

import { getProducts } from "@/services/product-service";
import { useState, useEffect } from "react";
import Link from "next/link";
import CardMenu from "@/components/fragments/CardMenu";
import BackButton from "@/components/ui/BackButton";
import Button from "@/components/ui/Button";
import Layouts from "@/components/layouts/BodyLayouts/page";

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
    <Layouts>
      <main className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="mb-8 md:mb-12 lg:mb-16 xl:mb-20 bg-Headline rounded-lg px-7 py-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white">
            Our Delicious Menu
          </h1>
          <div className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6 text-white">
            Explore our wide selection of mouthwatering dishes.
          </div>
        </div>
        <BackButton href={"/"} />
        <div className="flex items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 max-w-80">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 place-items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-4 py-2">
          {searchResult.map((product) => (
            <Link href={`/menu/${product.id}`} key={product.id}>
              <CardMenu key={product.id}>
                <CardMenu.Header alt={product.title} src={product.image} />
                <CardMenu.Body title={product.title}>
                  {product.description}
                </CardMenu.Body>
                <CardMenu.Footer price={product.price}>
                  <Button>Detail</Button>
                </CardMenu.Footer>
              </CardMenu>
            </Link>
          ))}
        </div>
      </main>
    </Layouts>
  );
}
