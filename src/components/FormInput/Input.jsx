import React from "react";

export default function Input({ type, name, placeholder }) {
  return (
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      className="w-full bg-slate-200 text-Headline py-2 px-3 rounded-md focus:outline-none focus:ring-btnSecondary focus:ring-1 focus:border-buttonColor placeholder:opacity-50"
    />
  );
}
