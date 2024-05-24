import React from "react";

export default function Layouts({ children, classname }) {
  return (
    <>
      <main className={`w-full min-h-screen ${classname} overflow-hidden`}>
        {children}
      </main>
    </>
  );
}
