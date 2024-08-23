import dbConnect from "@/lib/connectDB";
import ProductSchema from "@/lib/schema/productSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, image, keywords, category } = await req.json();

  if (!name || !image || !keywords || !category) {
    return NextResponse.json({
      error: "All fields are required",
      success: false,
    });
  }

  try {
    await dbConnect();
    const newProduct = await ProductSchema.create({
      name,
      image,
      keywords,
      category,
    });

    return NextResponse.json({
      product: newProduct,
      success: true,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      error: e,
      success: false,
    });
  }
}
