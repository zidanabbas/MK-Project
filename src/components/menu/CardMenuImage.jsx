import React from "react";
import Image from "next/image";
export default function CardMenuImage({ alt, src }) {
  return (
    <>
      <Image
        alt={alt}
        className="mx-auto mb-4 rounded-md hover:scale-100 hover:duration-300"
        height={150}
        width={150}
        src={src}
        style={{
          aspectRatio: "150/150",
          objectFit: "cover",
        }}
      />
    </>
  );
}
