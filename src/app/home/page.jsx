import React from "react";
import Carrousel from "@/components/Carrousel";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="min-w-full min-h-[1000px] bg-Background overflow-hidden">
      <div className="w-full min-h-screen">
        <Hero />
      </div>
      <section className="min-h-screen p-0 pt-14">
        <div className="container">
          <h1 className="text-2xl px-4 py-2 text-white font-semibold bg-Headline">
            Our Menu
          </h1>
          <h4 className="text-md px-4 py-2 text-Headline font-semibold">
            Favourite
          </h4>
          <Carrousel />
        </div>
      </section>
    </main>
  );
}
