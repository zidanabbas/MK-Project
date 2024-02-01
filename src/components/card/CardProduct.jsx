import Image from "next/image";
import React from "react";

export default function CardProduct() {
  return (
    <div className="card max-w-96 max-h-sm bg-base-100 shadow-xl">
      <figure>
        <Image
          src={
            "https://images.pexels.com/photos/14072794/pexels-photo-14072794.png?auto=compress&cs=tinysrgb&w=600"
          }
          alt="Nasi Goreng Udang"
          width={800}
          height={800}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Nasi Goreng Udang
          <div className="badge badge-secondary">Popular</div>
        </h2>
        <p className="text-base">
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
