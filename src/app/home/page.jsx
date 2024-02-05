import React from "react";
import Carrousel from "@/components/Carrousel";
import Hero from "@/components/Hero";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import Image from "next/image";
import ButtonView from "@/components/button/page";

export default function HomePage() {
  return (
    <>
      <main className="min-w-full min-h-[1000px] bg-Background overflow-hidden">
        <div className="w-full min-h-screen">
          <Hero />
        </div>
        <section className="min-h-screen p-0 pt-14 pb-16 border border-b-black">
          <div className="container flex justify-center flex-col p-3 border-black">
            <h1 className="text-2xl px-4 py-2 text-white font-semibold bg-Headline">
              Our Menu
            </h1>
            <div className="px-4">
              <h4 className="text-xl py-2 text-Headline font-semibold">
                Favourite
              </h4>
              <p className="text-base text-Paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur, id.
              </p>
            </div>
            <Carrousel />
            <ButtonView href={"/menu"}>View All</ButtonView>
          </div>
        </section>
        <section className="min-h-screen pt-14 pb-16">
          <div className="container">
            <h1 className="text-2xl px-4 py-2 text-white font-semibold bg-Headline">
              Profile
            </h1>
            <div className="grid px-4">
              <h4 className="text-xl py-2 text-Headline font-semibold">
                Owner
              </h4>
              <p className="text-base text-Paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur, id.
              </p>
              <div className="w-full h-[500px] grid sm:grid-cols-2 place-items-center">
                <div className="w-full">
                  <Image
                    src={`https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=600`}
                    className="object-cover h-96 rounded-badge"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="w-full h-96 p-2 text-center">
                  <h2 className="font-bold text-2xl py-2 text-Headline">
                    Muhammad Kadir Panjaitan
                  </h2>
                  <p className="text-slate-700 text-balance">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos ex neque eaque quos corrupti fuga tempora. Obcaecati
                    amet minima numquam quaerat quam, beatae recusandae ducimus
                    at fugiat repellat dolore nam, quod optio sit ipsam
                    similique animi, ad voluptate culpa expedita doloremque
                    ipsum provident a sequi? Sit repellendus quidem pariatur
                    odio.
                  </p>
                </div>
              </div>

              <ButtonView href={"/profile"}>Selengkapnya</ButtonView>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
