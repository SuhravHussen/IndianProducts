"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import AddAlternatives from "./AddAlternatives";
import { useToast } from "../ui/use-toast";
import handleAddCategory from "@/actions/addCategory";
import { memo } from "react";

function AddCategory({ refreshCategoryList }) {
  const [name, setName] = useState("");
  const [alternatives, setAlternatives] = useState([]);
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const addCategory = async (e) => {
    try {
      setLoading(true);
      const data = await handleAddCategory(name, alternatives, toast);
      refreshCategoryList();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Add Category</h1>
      <div className="flex flex-col gap-4 mt-4 justify-center">
        <Input
          placeholder="Category Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <AddAlternatives
          Alternatives={alternatives}
          setAlternatives={setAlternatives}
        />
        <Button disabled={loading} type="submit" onClick={addCategory}>
          {loading ? "Loading..." : "Add Category"}
        </Button>
      </div>
    </div>
  );
}

export default memo(AddCategory);
