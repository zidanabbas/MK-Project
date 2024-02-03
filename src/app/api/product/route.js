import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  const product = await prisma.product.findMany({});
  return NextResponse.json({ status: 200, message: "Success", data: product });
}
