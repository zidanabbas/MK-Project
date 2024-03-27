import React from "react";
import CardMenuBody from "./CardMenuBody";

export default function CardMenu({ titleMenuName, alt, src, name }) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
            {titleMenuName}
          </h2>
        </div>
        <CardMenuBody alt={alt} src={src} name={name} />
      </div>
    </div>
  );
}
