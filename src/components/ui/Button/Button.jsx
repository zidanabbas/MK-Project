import React from "react";

export default function Button({
  children,
  type = "button",
  onClick,
  classname,
}) {
  return (
    <>
      <button
        className={`text-center mx-auto items-center px-2 py-2 rounded-xl bg-Button text-Headline hover:text-Button hover:bg-Headline duration-300 my-2 ${classname}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
