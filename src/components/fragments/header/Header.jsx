"use client";
import React, { useState } from "react";
import Navbar from "@/components/fragments/header/Navbar";
import Brand from "@/components/ui/Brand";
import Image from "next/image";
import logoMK from "@/assets/image/logo-brand.png";
import MobileNav from "@/components/fragments/header/MobileNav";
import Icon from "@mdi/react";
import { mdiMenu, mdiMenuOpen } from "@mdi/js";
import Cart from "@/components/ui/Cart";

export default function Header() {
  const [isCLicked, setIsClicked] = useState(false);
  const toggleMenu = () => {
    setIsClicked(!isCLicked);
  };
  return (
    <header className="fixed h-12 py-2 w-full -top-1 left-0 z-10 flex items-center bg-Headline">
      <div className="container relative">
        <div className="relative flex items-center justify-between">
          <Brand>
            <Image src={logoMK} alt="Logo MK" width={40} height={40} />
          </Brand>
          <div className="flex items-center px-4 gap-2">
            <Cart />
            <Navbar />
            <button className="lg:hidden" onClick={toggleMenu}>
              {isCLicked ? (
                <Icon path={mdiMenuOpen} size={2} className="p-1 text-white" />
              ) : (
                <Icon path={mdiMenu} size={2} className="p-1 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isCLicked && <MobileNav />}
    </header>
  );
}
