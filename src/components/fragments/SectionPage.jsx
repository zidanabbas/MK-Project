import React from "react";

export default function SectionPage({ title, description, children }) {
  return (
    <div className="w-full h-full grid grid-rows-1 py-4 px-2">
      <div className="mb-4 h-20">
        <h2 className="px-4 py-2 text-xl font-bold text-white bg-Headline">
          {title}
        </h2>
        <p className="px-4 py-2 text-md font-bold text-Headline">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
}
