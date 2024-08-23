import dbConnect from "@/lib/connectDB";
import CategorySchema from "@/lib/schema/categorySchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, alternatives } = await req.json();

  if (!name || !alternatives) {
    return NextResponse.json({
      error: "All fields are required",
      success: false,
    });
  }

  try {
    await dbConnect();
    const newCategory = await CategorySchema.create({
      name,
      alternatives,
    });

    return NextResponse.json({
      product: newCategory,
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
