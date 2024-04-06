import React from "react";

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
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Nasi Goreng MK
            </h1>
            <p className="mb-5 text-slate-300">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-Headline text-Button hover:bg-Button hover:text-Headline">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
