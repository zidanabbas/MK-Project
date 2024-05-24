"use client";
import React from "react";
import FormInput from "../FormInput/FormInput";
import Link from "next/link";
import Button from "./Button";
import { login } from "@/services/auth-service.js";
import { useRouter } from "next/navigation";

export default function FormLogin() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    login(formData, (status, res) => {
      if (status) {
        localStorage.setItem("token", res.token);
        router.push("/menu");
      } else {
        console.log("gagal login");
      }
    });
  };

  return (
    <form action="" onSubmit={handleLogin}>
      <div className="flex flex-col items-center">
        <FormInput
          label="email"
          name="email"
          type="email"
          placeholder="Masukkan email Anda..."
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          placeholder="Masukkan Password Anda...."
        />
      </div>
      <Button type="submit">Login</Button>
      <div className="flex gap-x-2 font-Poppins">
        <p className="font-Poppins text-base text-white">
          Dont have an account?
        </p>
        <Link href={"/register"} className="text-white">
          Register
        </Link>
      </div>
    </form>
  );
}
