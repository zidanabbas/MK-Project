"use client";
import React from "react";
import Navbar from "./Navbar";
import Brand from "./Brand";

export default function Header() {
  return (
    <header className="fixed py-2 w-full -top-1 left-0 z-10 flex items-center bg-Headline">
      <div className="container ">
        <div className="relative flex items-center justify-between">
          <Brand logo={"Nasi Goreng MK"} />
          <div className="flex items-center px-4">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}
