import React from "react";
import Image from "next/image";
// import Button from "./Button";

function CardMenu({ children }) {
  return (
    <div className="w-64 md:w-64 md:max-w-72 max-h-[500px] flex flex-col justify-between bg-white shadow-lg rounded-lg overflow-hidden lg:w-72 xl:w-80 hover:scale-105 hover:duration-500">
      {children}
    </div>
  );
}

const Header = ({ alt, src }) => {
  return (
    <div className="bg-Headline dark:bg-gray-900 overflow-hidden shadow-sm">
      <Image
        alt={alt}
        className="w-full h-48 hover:scale-100 hover:duration-300 object-cover"
        height={300}
        width={300}
        src={src}
      />
    </div>
  );
};

const Body = ({ title, children }) => {
  return (
    <div className="flex flex-col justify-center min-h-32 px-3 py-2">
      <div className="px-2 py-2 ">
        <h2 className="text-lg leading-6 font-medium text-gray-900">
          {title.substring(0, 20)}
          {title.length > 20 ? "..." : ""}
        </h2>
        <p className="text-base py-2 font-light text-gray-900">
          {children.substring(0, 40)}
          {children.length > 100 ? "..." : ""}
        </p>
      </div>
    </div>
  );
};

const Footer = ({ price, children }) => {
  return (
    <div className="flex flex-row items-center justify-between min-h-14 px-4 bg-slate-900 rounded-b-lg">
      <p className="text-lg leading-6 font-medium text-white">Rp. {price}</p>
      <span className="px-2">{children}</span>
    </div>
  );
};

CardMenu.Header = Header;
CardMenu.Body = Body;
CardMenu.Footer = Footer;

export default CardMenu;
