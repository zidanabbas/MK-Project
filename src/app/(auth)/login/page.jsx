"use client";
import FormLogin from "@/components/fragments/FormLogin";
import AuthLayouts from "@/components/layouts/AuthLayouts/page";
import Layouts from "@/components/layouts/BodyLayouts/page";
import React from "react";

export default function LoginPage() {
  return (
    <Layouts classname={"min-h-screen grid items-center"}>
      <AuthLayouts title={"Login"} desc={"Login your account."}>
        <FormLogin />
      </AuthLayouts>
    </Layouts>
  );
}
