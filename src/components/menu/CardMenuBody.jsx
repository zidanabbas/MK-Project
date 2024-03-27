import React from "react";
import CardMenuItemBody from "./CardMenuItemBody";

export default function CardMenuBody({ alt, src, name }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <CardMenuItemBody alt={alt} src={src} name={name} />
      <CardMenuItemBody alt={alt} src={src} name={name} />
    </div>
  );
}
