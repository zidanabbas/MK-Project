import prisma from "@/lib/prisma.js";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, description, price, imageUrl, category, rating } =
    await request.json();
  const data = { name, description, price, imageUrl, category, rating };
  const product = await prisma.product.create({ data });
  if (!product) {
    return NextResponse.json({
      status: 500,
      message: "Failed to add product",
    });
  } else {
    return NextResponse.json({
      status: 200,
      message: "Success",
    });
  }
}
