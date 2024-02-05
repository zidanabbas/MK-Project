import Image from "next/image";
import React from "react";

export default function CardProduct() {
  return (
    <div className="card max-w-80 max-h-96 md:max-h-[460px] bg-base-100 shadow-xl">
      <figure>
        <Image
          src={
            "https://images.pexels.com/photos/14072794/pexels-photo-14072794.png?auto=compress&cs=tinysrgb&w=600"
          }
          alt="Nasi Goreng Udang"
          className="object-cover h-52 w-full"
          width={500}
          height={500}
        />
      </figure>
      <div className="card-body max-h-44 w-full p-4 mt-2 rounded-b-xl">
        <div className="w-full flex justify-between items-center ">
          <h2 className="card-title text-md text-white">Nasi Goreng Udang</h2>
          <div className="badge badge-secondary">Popular</div>
        </div>
        <p className="text-md text-pretty h-full line-clamp-3 md:line-clamp-none">
          Nasi goreng udang adalah hidangan yang lezat dan menggugah selera,
          menggabungkan cita rasa gurih nasi goreng dengan kelezatan udang yang
          segar.
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Foods</div>
          <div className="badge badge-outline">Meal</div>
        </div>
      </div>
    </div>
  );
}
