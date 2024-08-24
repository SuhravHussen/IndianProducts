import dbConnect from "@/lib/connectDB";
import ProductSchema from "@/lib/schema/productSchema";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const offset = parseInt(searchParams.get("offset"), 10) || 0;
    const limit = parseInt(searchParams.get("limit"), 10) || 10;

    const products = await ProductSchema.find().skip(offset).limit(limit);

    return NextResponse.json({
      data: products,
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
