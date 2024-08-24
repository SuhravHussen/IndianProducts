import dbConnect from "@/lib/connectDB";
import ProductSchema from "@/lib/schema/productSchema";

import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();

    // Parse query parameters
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("query") || "";

    // Search categories by name
    const product = await ProductSchema.findOne({
      name: { $regex: name, $options: "i" },
    }).sort({ name: 1 });

    return NextResponse.json({
      data: product,
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
