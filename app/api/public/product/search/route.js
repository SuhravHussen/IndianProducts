import dbConnect from "@/lib/connectDB";
import ProductSchema from "@/lib/schema/productSchema";

import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();

    // Parse query parameters
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query") || "";

    const regexPattern = new RegExp(query.split("").join(".*"), "i");

    const products = await ProductSchema.aggregate([
      {
        $match: {
          keywords: { $regex: regexPattern },
        },
      },
      {
        $addFields: {
          matchedKeywords: {
            $filter: {
              input: "$keywords",
              as: "keyword",
              cond: {
                $regexMatch: { input: "$$keyword", regex: regexPattern },
              },
            },
          },
        },
      },
      {
        $addFields: {
          score: { $size: "$matchedKeywords" },
        },
      },
      {
        $sort: { score: -1 },
      },
    ]);

    return NextResponse.json({
      data: products,
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
