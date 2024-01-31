import React from "react";
import Navbar from "./Navbar";
import Brand from "./Brand";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="fixed py-2 w-full top-0 left-0 z-10 flex items-center bg-Headline">
      <div className="container ">
        <div className="relative flex items-center justify-between">
          <Brand logo={"Nasi Goreng MK"} />
          {/* Navigation */}
          <div className="flex items-center px-4">
            {/* Mobile Nav */}
            <MobileNav />
            {/* Navbar */}
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}
