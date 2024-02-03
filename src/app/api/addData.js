import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, description, price, imageUrl } = await req.body;

    if (!name || !description || !price || !imageUrl) {
      return NextResponse.json(
        { error: "Please fill in all the fields." },
        { status: 400 }
      );
    }

    try {
      const newProduct = await prisma.product.create({
        data: {
          name,
          description,
          price: parseInt(price),
          imageUrl,
        },
      });
      return NextResponse.json({ newProduct }, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: "Error adding data." },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
  }
}
