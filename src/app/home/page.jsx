"use client";
import React from "react";
import Carrousel from "@/components/fragments/Carrousel";
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button/Button";
import Link from "next/link";
import ProfilOwner from "@/components/fragments/ProfilOwner";
import SectionPage from "@/components/layouts/SectionPage/SectionPage";
import Layouts from "@/components/layouts/BodyLayouts/page";

export default function HomePage() {
  return (
    <Layouts>
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
      <SectionPage
        title={"Our Menu"}
        description={"KAMI BERPIKIR ANDA MENYUKAI INI"}
      >
        <Carrousel />
        <Button>
          <Link href={"/menu"}>View All Menu</Link>
        </Button>
      </SectionPage>

      <SectionPage title={"Profil"} description={"Profile Owner"}>
        <ProfilOwner
          alt={"Muhammad Kadir Panjaitan"}
          nameOwner={"Muhammad Kadir Panjaitan"}
          description={
            "Chef Muhammad Kadir Panjaitan telah berkontribusi secara signifikan dalam membawa pengalaman kuliner yang luar biasa di Restoran SAKURA. Dengan dedikasi terhadap detail dan rasa, Chef Muhammad Kadir Panjaitan terus berusaha untuk memberikan yang terbaik di setiap hidangan yang disajikan."
          }
        />
        <Button>
          <Link href={"/profile"}>View Profile</Link>
        </Button>
      </SectionPage>
    </Layouts>
  );
}
