import React from "react";
import Brand from "@/components/ui/Brand";
import Link from "next/link";
import Image from "next/image";
import logoMK from "@/assets/image/logo-brand.png";

export default function MobileNav() {
  return (
    <nav className="lg:hidden absolute top-12 right-0 bg-Headline py-5 shadow-2xl rounded-b-lg max-w-64 w-full">
      <div className="w-20">
        <Brand>
          <Image src={logoMK} alt="Logo MK" width={40} height={50} />
        </Brand>
      </div>
      <div className="flex items-center h-full justify-center">
        <ul className="block">
          <div className="group">
            <Link
              href="/"
              className="text-base text-white py-2 mx-8 flex group-hover:text-Button"
            >
              Home
            </Link>
          </div>
          <div className="group">
            <Link
              href="/menu"
              className="text-base text-white py-2 mx-8 flex group-hover:text-Button"
            >
              Menu
            </Link>
          </div>
          <div className="group">
            <Link
              href="/profile"
              className="text-base text-white py-2 mx-8 flex group-hover:text-Button"
            >
              Profile
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}
