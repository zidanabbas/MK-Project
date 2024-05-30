import Image from "next/image";
export default function ProfilOwner({ alt, nameOwner, description }) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 place-content-around gap-4">
      <Image
        src={`https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZWZmfGVufDB8fDB8fHww`}
        className="object-contain my-2 mx-auto"
        width={500}
        height={500}
        alt={alt}
      />
      <div className="flex flex-col min-h-80 justify-center items-center">
        <div className="text-center p-2 w-full">
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl py-2 text-Headline">
            {nameOwner}
          </h2>
        </div>
        <div className="text-center p-2 w-full">
          <p className="text-slate-700 text-sm sm:text-base md:text-lg lg:text-xl line-clamp-3 md:line-clamp-5 lg:line-clamp-none">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
