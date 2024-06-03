import Image from "next/image";
import React from "react";
import Button from "@/components/ui/Button/Button";
import BackButton from "@/components/ui/Button/BackButton";
export default function DetailProduct({
  image,
  title,
  description,
  alt,
  price,
}) {
  return (
    <div className="w-full bg-cream-light min-h-screen flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-md p-6 flex flex-col lg:flex-row items-center">
        <span className="absolute bottom-0 right-10 ml-4 mb-4">
          <BackButton href="/menu" />
        </span>
        <div className="flex-1 flex flex-col lg:flex-row gap-6 items-center">
          <Image
            src={image}
            width={500}
            height={500}
            alt={alt}
            className="w-full max-w-xs lg:max-w-sm object-cover rounded-full mb-4 lg:mb-0 lg:mr-6"
          />
          <div className="w-full">
            <h1 className="text-xl lg:text-2xl font-bold text-zinc-800 mb-2">
              {title}
            </h1>
            <p className="text-zinc-600 text-sm lg:text-base mb-4">
              {description}
            </p>
            <p className="text-xl lg:text-2xl font-bold text-zinc-800 mb-2">
              {price}
            </p>
            <Button>Pesan Sekarang</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
