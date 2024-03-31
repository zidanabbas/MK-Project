import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const product = await prisma.products.findMany();
  return NextResponse.json(product);
}
