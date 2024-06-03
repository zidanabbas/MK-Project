import React from "react";

export default function ContainerSection({ children, classname }) {
  return (
    <section
      className={`container grid place-items-center ${classname} min-h-[500px] my-4 overflow-hidden p-2`}
    >
      {children}
    </section>
  );
}
