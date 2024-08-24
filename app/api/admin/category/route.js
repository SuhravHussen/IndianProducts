import dbConnect from "@/lib/connectDB";
import CategorySchema from "@/lib/schema/categorySchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, alternatives = [] } = await req.json();

  if (!name) {
    return NextResponse.json({
      error: "Name field are required",
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

export async function GET(req) {
  try {
    await dbConnect();

    // Parse the query parameters
    const { searchParams } = new URL(req.url);
    const includeAlternatives = searchParams.get("alternatives") === "true";

    // Fetch categories, with or without the `alternatives` field
    const categories = await CategorySchema.find()
      .select(includeAlternatives ? "" : "-alternatives") // Exclude `alternatives` field if not included
      .sort({ name: 1 });

    return NextResponse.json({
      data: categories,
      success: true,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      error: e.message,
      success: false,
    });
  }
}
