import Hero from "@/components/ui/Hero";
import ProfilOwner from "@/components/fragments/ProfilOwner";
import Layouts from "@/components/layouts/BodyLayouts/page";
import React from "react";
import SectionPage from "@/components/layouts/SectionPage/SectionPage";

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
        <SectionPage title={"Profil"} description={"Profile Owner"}>
          <ProfilOwner
            alt={"Muhammad Kadir Panjaitan"}
            nameOwner={"Muhammad Kadir Panjaitan"}
            description={
              "Chef Muhammad Kadir Panjaitan telah berkontribusi secara signifikan dalam membawa pengalaman kuliner yang luar biasa di Restoran SAKURA. Dengan dedikasi terhadap detail dan rasa, Chef Muhammad Kadir Panjaitan terus berusaha untuk memberikan yang terbaik di setiap hidangan yang disajikan."
            }
          />
        </SectionPage>
      </Layouts>
    </>
  );
}
