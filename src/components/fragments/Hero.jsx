import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="w-full">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1680674774705-90b4904b3a7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hc2klMjBnb3Jlbmd8ZW58MHx8MHx8fDA%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Nasi Goreng MK
            </h1>
            <h2 className="mb-5 text-white font-bold text-2xl">
              Authentic taste of Indonesian spices
            </h2>
            <Button>Pesan Sekarang</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
