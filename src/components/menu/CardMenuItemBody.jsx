import React from "react";
import CardMenuImage from "./CardMenuImage";

export default function CardMenuItemBody({ alt, src, name }) {
  return (
    <div className="text-center p-2 hover:scale-110 hover:shadow-lg hover:duration-500 hover:ease-in-out rounded-md hover:rounded-lg">
      <CardMenuImage alt={alt} src={src} />
      <h2 className="text-lg leading-6 font-medium text-gray-900">{name}</h2>
    </div>
  );
}
