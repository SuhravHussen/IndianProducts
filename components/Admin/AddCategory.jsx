"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import AddAlternatives from "./AddAlternatives";

export default function AddCategory() {
  const handleImageUpload = async (e) => {
    try {
      const categoryRes = await fetch("/api/admin/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Product Name",
          alternatives: ["oil", "food", "drink"],
        }),
      });

      const data = await categoryRes.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Add Category</h1>
      <div className="flex flex-col gap-4 mt-4 justify-center">
        <Input placeholder="Category Name" type="text" />
        <AddAlternatives />
        <Button type="submit" onClick={handleImageUpload}>
          Add
        </Button>
      </div>
    </div>
  );
}
