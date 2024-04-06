import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-16 xl:py-20 bg-black">
      <div className="container px-4 md:px-6 ">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Nasi Goreng MK
              </h1>
              <p className="max-w-[500px] text-gray-500 md:text-xl dark:text-gray-400">
                Chinese Foods
              </p>
            </div>
            <div className="space-x-4 p-2">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Book a Table
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Book a Table
              </Link>
            </div>
          </div>
          <Image
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom"
            src="https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGZvb2RzJTIwZnJpZWQlMjByaWNlfGVufDB8fDB8fHww"
            height={1000}
          />
        </div>
      </div>
    </section>
  );
}
