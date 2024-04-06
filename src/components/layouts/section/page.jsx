import React from "react";

export default function ContainerSection({ children }) {
  return (
    <section className="min-h-[500px] pt-14 pb-16 border border-b-black">
      {children}
    </section>
  );
}
