"use client";
import React from "react";
import Carrousel from "@/components/fragments/Carrousel";
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";
import ContainerSection from "@/components/layouts/SectionLayouts/page";
import Link from "next/link";
import ProfilOwner from "@/components/fragments/ProfilOwner";
import SectionPage from "@/components/fragments/SectionPage";

export default function HomePage() {
  return (
    <>
      <Hero
        title={"Nasi Goreng MK"}
        decription={"Kami menyediakan nasi goreng"}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1680674774705-90b4904b3a7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hc2klMjBnb3Jlbmd8ZW58MHx8MHx8fDA%3D)",
        }}
      >
        <Button>Pesan Sekarang</Button>
      </Hero>
      {/* Start Section Carrousel Menu */}
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
      {/* End Section Carrousel Menu */}

      {/* Start Section Profile */}
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
      {/* End Section Profile */}
    </>
  );
}
