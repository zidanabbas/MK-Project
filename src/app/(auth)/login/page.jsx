import FormLogin from "@/components/fragments/FormLogin";
import AuthLayouts from "@/components/layouts/AuthLayouts/page";
import ContainerBody from "@/components/layouts/BodyLayouts/page";
import React from "react";

export default function LoginPage() {
  return (
    <ContainerBody classname={"min-h-screen grid items-center"}>
      <AuthLayouts title={"Login"} desc={"Login your account."}>
        <FormLogin />
      </AuthLayouts>
    </ContainerBody>
  );
}
