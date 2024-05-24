import FormRegister from "@/components/fragments/FormRegister";
import AuthLayouts from "@/components/layouts/AuthLayouts/page";
import ContainerBody from "@/components/layouts/BodyLayouts/page";
import React from "react";

export default function RegisterPage() {
  return (
    <ContainerBody classname={"min-h-screen grid items-center"}>
      <AuthLayouts title={"Register"} desc={"Register for you'r account."}>
        <FormRegister />
      </AuthLayouts>
    </ContainerBody>
  );
}
