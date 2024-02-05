import Link from "next/link";
import React from "react";

export default function ButtonView({ href, children }) {
  return (
    <Link
      href={href}
      className={
        "text-center mx-auto px-4 py-2 rounded-xl text-Button bg-Headline hover:text-Headline hover:bg-Button duration-300 my-2"
      }
    >
      {children}
    </Link>
  );
}
