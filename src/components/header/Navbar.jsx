import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="absolute right-4 top-full hidden lg:flex max-w-[250px] rounded-lg shadow-lg lg:static lg:rounded-none lg:shadow-none lg:bg-transparent">
        <ul className="flex gap-5 px-2 text-white">
          <Link href="/home" className="text-Headline">
            Home
          </Link>
          <Link href="/menu" className="text-Headline">
            Menu
          </Link>
          <Link href="/profile" className="text-Headline">
            Profile
          </Link>
        </ul>
      </nav>
    </>
  );
}
