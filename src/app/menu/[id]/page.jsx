"use client";
import ContainerSection from "@/components/layouts/SectionLayouts/page";
import { getDetailProduct } from "@/services/product-service";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import DetailProduct from "@/components/fragments/DetailProduct";

export default function DetailMenu() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data);
    });
  }, [id]);
  if (!product) <div>Loading...</div>;
  return (
    <ContainerSection>
      {product && (
        <DetailProduct
          image={product.image}
          title={product.title}
          description={product.description}
          alt={product.title}
          price={`Rp. ${product.price}`}
        />
      )}
    </ContainerSection>
  );
}
