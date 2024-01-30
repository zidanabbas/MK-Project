import React from "react";
import Navbar from "./navbar";
import Brand from "./brand";
import MobileNav from "./mobileNav";

export default function Header() {
  return (
    <header className="fixed border py-2 w-full top-0 left-0 z-10 flex items-center bg-transparent">
      <div className="container">
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
