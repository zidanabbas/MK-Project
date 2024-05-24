"use client";
import ProfilOwner from "@/components/fragments/ProfilOwner";
import Layouts from "@/components/layouts/BodyLayouts/page";
import ContainerSection from "@/components/layouts/SectionLayouts/page";
import React from "react";

export default function ProfilePage() {
  return (
    <>
      <Layouts>
        <ContainerSection classname={"bg-Headline"}>
          <div className="container mt-6 border">
            <h3 className="text-white font-semibold text-3xl p-2  ">
              Nasi Goreng MK
            </h3>
          </div>
          <div className="relative translate-y-64 container mx-auto bg-Background md:flex justify-evenly items-center shadow-lg rounded-lg">
            <div className="px-5 py-4 items-center flex justify-center md:block gap-2 md:gap-0 text-Primary font-semibold">
              <span className="w-full inline-block text-center text-2xl uppercase py-2">
                Visi
              </span>
              <p className="text-lg max-w-lg text-pretty p-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae magnam tempora repellat incidunt hic esse rerum, sed
                possimus dolor quas.
              </p>
            </div>
            <div className="px-5 py-4 items-center flex justify-center md:block gap-2 md:gap-0 text-Primary font-semibold">
              <span className="w-full inline-block text-center text-2xl uppercase py-2">
                Misi
              </span>
              <p className="text-text-Paragraph text-lg max-w-lg p-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae magnam tempora repellat incidunt hic esse rerum, sed
                possimus dolor quas.
              </p>
            </div>
          </div>
        </ContainerSection>
        <ContainerSection classname={"md:pt-20 pt-52"}>
          <ProfilOwner
            alt={"Muhammad Kadir Panjaitan"}
            nameOwner={"Muhammad Kadir Panjaitan"}
            description={"adasd"}
          />
        </ContainerSection>
      </Layouts>
    </>
  );
}
