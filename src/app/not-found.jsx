"use client";
import React, { useEffect } from "react";
import ContainerBody from "@/components/layouts/BodyLayouts/page";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, [router]);

  return (
    <ContainerBody>
      <div className="container bg-slate-900 mt-20">
        <h1 className="text-2xl font-semibold text-slate-300">
          Page Not Found
        </h1>
        <p className="text-slate-300 text-md">
          Sorry, this page does not exist.
        </p>
      </div>
    </ContainerBody>
  );
}
