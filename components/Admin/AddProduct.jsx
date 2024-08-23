"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import KeywordSelector from "./KeywordSelector";
import { SelectCategories } from "./SelectCategories";

export default function AddProduct() {
  const [image, setImage] = useState(null);

  const handleImageUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "india_product");

    try {
      //   const res = await fetch(
      //     "https://api.cloudinary.com/v1_1/daamlrloa/image/upload",
      //     {
      //       method: "POST",
      //       body: formData,
      //     }
      //   );

      //   const data = await res.json();

      //   console.log(data);

      const productRes = await fetch("/api/admin/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Product Name",
          image: "https://api.cloudinary.com/v1_1/daamlrloa/image/upload",
          keywords: ["oil", "food", "drink"],
          category: "oil",
        }),
      });

      const productData = await productRes.json();

      console.log(productData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1 className="text-xl font-bold">Add Product</h1>

      <div className="flex flex-col gap-4 mt-4 justify-center">
        <Input placeholder="Product Name" type="text" />
        <div>
          <Label htmlFor="picture" className="cursor-pointer">
            Picture
          </Label>
          <Input
            id="picture"
            type="file"
            className="cursor-pointer"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <SelectCategories
          label={"Category"}
          placeholder={"Select Category"}
          list={[
            { label: "Oil", value: "oil" },
            { label: "Food", value: "food" },
            { label: "Drink", value: "drink" },
          ]}
        />
        <KeywordSelector />

        <Button onClick={handleImageUpload}>Add</Button>
      </div>
    </div>
  );
}
