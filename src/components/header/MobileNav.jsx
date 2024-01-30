import React from "react";

export default function MobileNav() {
  return (
    <>
      <button
        id="hamburger"
        name="hamburger"
        type="button"
        className="absolute right-4 block lg:hidden"
      >
        <span className="hamburger-line origin-top-left transition duration-500 ease-in-out"></span>
        <span className="hamburger-line transition duration-500 ease-in-out"></span>
        <span className="hamburger-line origin-bottom-left transition duration-500 ease-in-out"></span>
      </button>
    </>
  );
}
