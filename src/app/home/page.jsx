import React from "react";
import Carrousel from "@/components/fragments/Carrousel";
import Hero from "@/components/fragments/Hero";
import Button from "@/components/fragments/Button";
import ContainerSection from "@/components/layouts/SectionLayouts/page";
import Link from "next/link";
import ProfilOwner from "@/components/fragments/ProfilOwner";
import SectionPage from "@/components/fragments/SectionPage";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ContainerSection>
        <SectionPage
          title={"Our Menu"}
          description={"KAMI BERPIKIR ANDA MENYUKAI INI"}
        >
          <Carrousel />
        </SectionPage>
        <Button>
          <Link href={"/menu"}>View All Menu</Link>
        </Button>
      </ContainerSection>
      <ContainerSection>
        <SectionPage
          title={"Profil Owner"}
          description={"Lorem ipsum dolor sit amet"}
        >
          <ProfilOwner
            alt={"Muhammad Kadir Panjaitan"}
            nameOwner={"Muhammad Kadir Panjaitan"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus libero, voluptatum adipisci tenetur eaque iste aspernatur ex. Quod eveniet repellat non voluptates earum. Recusandae consectetur perferendis itaque vitae sed dolorum quae est, porro corporis eius voluptatum cupiditate optio soluta inventore?"
            }
          />
        </SectionPage>

        <Button>
          <Link href={"/profil"}>View Profile</Link>
        </Button>
      </ContainerSection>
    </>
  );
}
