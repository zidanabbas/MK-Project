import Image from "next/image";
export default function ProfilOwner({ alt, nameOwner, description }) {
  return (
    <div className="w-full grid sm:grid-cols-2 place-items-center">
      <Image
        src={`https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=600`}
        className="object-cover h-96 rounded-badge my-2"
        width={500}
        height={500}
        alt={alt}
      />
      <div className="flex items-center border min-h-full ">
        <div className="text-center p-2 ">
          <h2 className="font-bold text-xl sm:text-2xl py-2 text-Headline">
            {nameOwner}
          </h2>
          <p className="text-slate-700 text-balance line-clamp-5 md:line-clamp-none ">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
