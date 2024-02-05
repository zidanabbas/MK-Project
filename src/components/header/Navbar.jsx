"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <>
      <nav className="absolute right-4 top-full hidden lg:flex max-w-[250px] rounded-lg shadow-lg lg:static lg:rounded-none lg:shadow-none lg:bg-transparent">
        <ul className="flex gap-5 px-2">
          <Link
            href="/"
            className={`${pathname === "/" ? "text-Button" : "text-white"}`}
          >
            Home
          </Link>
          <Link
            href="/menu"
            className={`${pathname === "/menu" ? "text-Button" : "text-white"}`}
          >
            Menu
          </Link>
          <Link
            href="/profile"
            className={`${
              pathname === "/profile" ? "text-Button" : "text-white"
            }`}
          >
            Profile
          </Link>
        </ul>
      </nav>
    </>
  );
}
