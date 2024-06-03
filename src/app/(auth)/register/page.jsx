"use client";
import FormRegister from "@/components/fragments/FormRegister";
import AuthLayouts from "@/components/layouts/AuthLayouts/page";
import Layouts from "@/components/layouts/BodyLayouts/page";
import React from "react";

export default function RegisterPage() {
  return (
    <Layouts classname={"min-h-screen grid items-center"}>
      <AuthLayouts title={"Register"} desc={"Register for you'r account."}>
        <FormRegister />
      </AuthLayouts>
    </Layouts>
  );
}
