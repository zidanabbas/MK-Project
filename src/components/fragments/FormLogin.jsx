"use client";
import React from "react";
import FormInput from "../FormInput/FormInput";
import Link from "next/link";
import Button from "./Button";

export default function FormLogin() {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("click");
  };
  return (
    <form action="" onSubmit={handleLogin}>
      <div className="flex flex-col items-center">
        <FormInput
          label="Email"
          name="email"
          type="text"
          placeholder="Masukkan email Anda..."
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          placeholder="Masukkan Password Anda...."
        />
      </div>
      <Button href={"/login"} type="submit" onClick={handleLogin}>
        Login
      </Button>
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
