"use client";
import React, { useState } from "react";
import FormInput from "@/components/fragments/FormInput/FormInput";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { register } from "@/services/auth-service";
import { useRouter } from "next/navigation";

export default function FormRegister() {
  const [showMessage, setShowMessage] = useState("");
  const router = useRouter();
  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    register(data, (status, res) => {
      if (status) {
        router.push("/login");
        setShowMessage(res.message);
      } else {
        console.log(res.message);
      }
    });
  };
  return (
    <form onSubmit={handleRegister}>
      <div className="flex flex-col items-center">
        {showMessage && <p>{showMessage}</p>}
        <FormInput
          label="Name"
          type="text"
          placeholder="Masukkan Nama Anda..."
          name="name"
        />
        <FormInput
          label="E-mail"
          type="email"
          placeholder="Masukkan E-mail Anda..."
          name="email"
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="Masukkan Password Anda..."
        />
        <Button type="submit">Register</Button>
        <div className="flex gap-x-2 font-Poppins">
          <p className="font-Poppins text-base text-paragraph">
            You have an account?
          </p>
          <Link href={"/login"} className="text-white">
            Login
          </Link>
        </div>
      </div>
    </form>
  );
}
