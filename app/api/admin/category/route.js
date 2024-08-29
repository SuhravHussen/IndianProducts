import dbConnect from "@/lib/connectDB";
import CategorySchema from "@/lib/schema/categorySchema";
import ProductSchema from "@/lib/schema/productSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  let { name, alternatives = [] } = await req.json();

  if (!name) {
    return NextResponse.json({
      error: "Name field are required",
      success: false,
    });
  }
  name = name.trim();
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

// update category
export async function PUT(req) {
  const body = await req.json();
  try {
    await dbConnect();
    // find category by id
    const category = await CategorySchema.findById(body._id);
    if (!category) {
      return NextResponse.json({
        error: "Category not found",
        success: false,
      });
    }

    // update category
    const updatedCategory = await CategorySchema.findByIdAndUpdate(
      body._id,
      {
        name: body.name.trim(),
        alternatives: body.alternatives,
      },
      {
        new: true,
      }
    );

    // check name changes
    if (updatedCategory.name !== category.name) {
      await ProductSchema.updateMany(
        { category: category.name },
        { $set: { category: updatedCategory.name } }
      );
    }
    return NextResponse.json({
      category: updatedCategory,
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

// delete category

export async function DELETE(req) {
  const body = await req.json();

  try {
    await dbConnect();
    // find category by id
    const category = await CategorySchema.findById(body._id);
    if (!category) {
      return NextResponse.json({
        error: "Category not found",
        success: false,
      });
    }

    // delete category
    const deletedCategory = await CategorySchema.findByIdAndDelete(body._id);
    return NextResponse.json({
      category: deletedCategory,
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
