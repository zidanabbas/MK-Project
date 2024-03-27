import React from "react";

export default function ContainerSection({ children }) {
  return (
    <section className="min-h-screen pt-14 pb-16 border border-b-black">
      {children}
    </section>
  );
}
