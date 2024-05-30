import React from "react";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";

export default function FormInput({ name, label, placeholder }) {
  return (
    <div className="w-full mb-2 px-2 py-1">
      <Label htmlFor={name}>{label}</Label>
      <Input type={name} name={name} placeholder={placeholder} />
    </div>
  );
}
