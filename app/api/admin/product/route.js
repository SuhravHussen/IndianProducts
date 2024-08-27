import dbConnect from "@/lib/connectDB";
import ProductSchema from "@/lib/schema/productSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, image, keywords, category } = await req.json();
  name = name.trim();
  image = image.trim();
  category = category.trim();

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

export async function PUT(req) {
  const body = await req.json();
  try {
    await dbConnect();
    // find product by id
    const product = await ProductSchema.findById(body._id);
    if (!product) {
      return NextResponse.json({
        error: "Product not found",
        success: false,
      });
    }

    // update product

    const updatedProduct = await ProductSchema.findByIdAndUpdate(
      body._id,
      {
        name: body.name.trim(),
        keywords: body.keywords,
        category: body.category.trim(),
      },
      {
        new: true,
      }
    );

    return NextResponse.json({
      product: updatedProduct,
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

//delete product

export async function DELETE(req) {
  const body = await req.json();

  try {
    await dbConnect();
    // find product by id
    const product = await ProductSchema.findById(body._id);

    if (!product) {
      return NextResponse.json({
        error: "Product not found",
        success: false,
      });
    }

    // delete product

    const deletedProduct = await ProductSchema.findByIdAndDelete(body._id);

    return NextResponse.json({
      data: deletedProduct,
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
