import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

function CardMenu({ children }) {
  return (
    <div className="md:max-w-72 bg-white shadow-lg rounded-lg overflow-hidden md:w-64 lg:w-72 xl:w-80 hover:scale-105 hover:duration-500 mb-2">
      {children}
    </div>
  );
}

const Header = ({ image, src }) => {
  return (
    <div className=" rounded-t-lg max-h-60 overflow-hidden object-cover">
      <Image
        alt={image}
        className="hover:scale-100 hover:duration-300 object-cover"
        height={300}
        width={300}
        src={src}
      />
    </div>
  );
};

const Body = ({ title, children }) => {
  return (
    <div className="h-28 px-5 py-2">
      <Link href={"/menu"}>
        <h2 className="text-lg leading-6 font-medium text-gray-900">
          {title.substring(0, 20)}
          {title.length > 20 ? "..." : ""}
        </h2>
        <p className="text-base py-2 font-light text-gray-900">
          {children.substring(0, 150)}
          {children.length > 150 ? "..." : ""}
        </p>
      </Link>
    </div>
  );
};

const Footer = ({ price }) => {
  return (
    <div className="flex items-center justify-between h-15 px-2 bg-Headline rounded-b-lg">
      <p className="text-lg leading-6 font-medium text-white">Rp.{price}</p>
      <Button href={"/menu"}>Buy Now</Button>
    </div>
  );
};

CardMenu.Header = Header;
CardMenu.Body = Body;
CardMenu.Footer = Footer;

export default CardMenu;
