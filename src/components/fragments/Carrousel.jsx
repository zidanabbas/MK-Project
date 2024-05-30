"use client";
import React, { useEffect, useState } from "react";
import CardMenu from "./CardMenu";
import { getProducts } from "@/services/product-service.js";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { addToCart, postCartToAPI } from "@/lib/redux/slices/cartSlices";

export default function Carrousel() {
  const [products, setProducts] = useState([]);
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

  const handleAddToCart = async () => {
    console.log("click");
  };

  const dispatch = useDispatch();
  return (
    <div className="carousel px-4 py-5 carousel-end rounded-box gap-3">
      {products.length > 0 ? (
        products.map((product) => (
          <div className="carousel-item" key={product.id}>
            <CardMenu key={product.id}>
              <CardMenu.Header alt={product.title} src={product.image} />
              <CardMenu.Body title={product.title}>
                {product.description}
              </CardMenu.Body>
              <CardMenu.Footer price={product.price}>
                <Button onClick={handleAddToCart}>Add To Cart</Button>
              </CardMenu.Footer>
            </CardMenu>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
