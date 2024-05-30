import React from "react";

export default function Hero({ style, title, description, children }) {
  return (
    <div className="w-full">
      <div className="hero min-h-screen" style={style}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold text-white">{title}</h1>
            <h2 className="mb-5 text-white font-bold text-2xl">
              {description}
            </h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
