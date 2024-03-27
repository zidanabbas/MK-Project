import React from "react";
import Link from "next/link";

export default function ButtonView({
  href,
  children,
  type = "button",
  onClick,
}) {
  return (
    <>
      <Link href={href}>
        <button
          className={
            "text-center mx-auto px-4 py-2 rounded-xl text-Button bg-Headline hover:text-Headline hover:bg-Button duration-300 my-2"
          }
          type={type}
          onClick={onClick}
        >
          {children}
        </button>
      </Link>
    </>
  );
}
