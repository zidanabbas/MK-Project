import React from "react";
import Link from "next/link";

export default function Brand({ children }) {
  return (
    <div className="px-4 text-lg font-bold">
      <Link href="/" className="font-bold py-6 text-lg text-white">
        {children}
      </Link>
    </div>
  );
}
