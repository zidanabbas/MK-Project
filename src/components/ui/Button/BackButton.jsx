import React from "react";
import Link from "next/link";
import { BiLeftArrowCircle } from "react-icons/bi";

export default function BackButton({ href }) {
  return (
    <button>
      <Link
        href={href}
        className="text-neutral-700 dark:text-neutral-400 flex gap-2 hover:gap-3 item-center justify-start transition-all duration-300 ease-in-out w-fit pb-4"
      >
        <BiLeftArrowCircle size={24} />
        <p className="text-lg">Back</p>
      </Link>
    </button>
  );
}
