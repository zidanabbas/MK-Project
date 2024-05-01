"use client";
import React from "react";
import FormInput from "../FormInput/FormInput";
import Link from "next/link";
import Button from "./Button";

export default function FormRegister() {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("click");
  };
  return (
    <form action="">
      <div className="flex flex-col items-center">
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
          label="Username"
          name="username"
          type="text"
          placeholder="Masukkan Username Anda..."
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          placeholder="Masukkan Password Anda..."
        />
        <Button href={"/register"} type="submit" onClick={handleRegister}>
          Register
        </Button>
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
