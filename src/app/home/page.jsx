import React from "react";
import Header from "@/components/header/Header";
export default function HomePage() {
  return (
    <main className="min-w-full min-h-[1000px] bg-Background overflow-hidden">
      <Header />
      <div className="w-full min-h-screen flex justify-center pt-16">
        <div className="container flex gap-2 px-10 items-center justify-between">
          <div className="container grid grid-cols-2 items-center">
            <h1>Nasi Goreng MK</h1>
            <h1>Nasi Goreng MK</h1>
          </div>
          <div className="container bg-slate-50">
            <h1>hello</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
