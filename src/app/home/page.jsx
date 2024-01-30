import React from "react";
import Header from "@/components/header/header";
export default function HomePage() {
  return (
    <main className="min-w-full min-h-[1000px] bg-Background overflow-hidden">
      <Header />
      <div className="container pt-4 flex justify-center mt-12 bg-red-400">
        <div className="container border">
          <h1>Home Page</h1>
        </div>
      </div>
    </main>
  );
}
