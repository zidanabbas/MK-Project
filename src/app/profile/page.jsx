import Hero from "@/components/ui/Hero";
import ProfilOwner from "@/components/fragments/ProfilOwner";
import Layouts from "@/components/layouts/BodyLayouts/page";
import ContainerSection from "@/components/layouts/SectionLayouts/page";
import React from "react";

export default function ProfilePage() {
  return (
    <>
      <Layouts>
        <Hero
          title={"PROFESSIONAL CHEF"}
          description={"The man behind the kitchen"}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1588416820614-f8d6ac6cea56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGtpdGNoZW4lMjByZXN0YXVyYW50fGVufDB8fDB8fHww)",
          }}
        />
        <ContainerSection>
          <ProfilOwner
            alt={"Muhammad Kadir Panjaitan"}
            nameOwner={"Muhammad Kadir Panjaitan"}
            description={
              "Once, an unrivaled culinary maestro, bringing the wonders of Japanese cuisine to every dish. As the former top Chef of a prestigious Japanese company, has left an unforgettable legacy in the culinary world."
            }
          />
        </ContainerSection>
      </Layouts>
    </>
  );
}
