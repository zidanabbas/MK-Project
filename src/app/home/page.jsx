import React from "react";
import Link from "next/link";
export default function HomePage() {
  return (
    <main className="min-w-full bg-white-300 overflow-hidden">
      <nav className="flex w-full items-center px-4 sm:px-24 py-4 justify-between bg-black text-white">
        <div className="px-2 font-semibold cursor-pointer border">
          <Link href="/">Nasi Goreng MK</Link>
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-5 px-2 border">
            <Link href="/home">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/profile">Profile</Link>
          </ul>
        </div>
      </nav>
      <div className="container flex justify-center bg-red-400 h-screen">
        <div className="container border">
          <h1>Home Page</h1>
        </div>
      </div>
    </main>
  );
}
