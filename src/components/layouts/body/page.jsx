import React from "react";

export default function ContainerBody({ children }) {
  return (
    <main className="min-w-full min-h-[1000px] bg-Background overflow-hidden">
      {children}
    </main>
  );
}
