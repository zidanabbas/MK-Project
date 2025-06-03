import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";

export async function POST(requst) {
  try {
    const formData = await requst.formData();
  } catch (error) {
    console.error("Gagal upload gambar", error);
  }
}
