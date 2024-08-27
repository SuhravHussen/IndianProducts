"use client";

import { memo, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import AddAlternatives from "./AddAlternatives";
import { getCategoryWithName } from "@/actions/getCategoryWithName";
import { updateCategory } from "@/actions/updateCategory";
import { useToast } from "../ui/use-toast";
import { deleteCategory } from "@/actions/deleteCategory";

function EditCategory({ refreshCategoryList }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState({ alternatives: [], name: "" });
  const [searchLoading, setSearchLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const { toast } = useToast();

  // search category
  const handleSearch = async () => {
    setSearchLoading(true);
    try {
      const categoryRes = await getCategoryWithName(name);
      setCategory(categoryRes.data);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  };

  // edit category
  const handleEditCategory = async () => {
    setEditLoading(true);
    try {
      const data = await updateCategory(category);
      if (data.success) {
        toast({
          title: "Category Updated",
        });
        refreshCategoryList();
      } else {
        toast({
          title: "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setEditLoading(false);
    }
  };

  // delete category
  const handleDeleteCategory = async () => {
    setDeleteLoading(true);
    try {
      const res = await deleteCategory(category._id);
      if (res.success) {
        toast({
          title: "Category Deleted",
        });
        refreshCategoryList();
      } else {
        toast({
          title: "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Edit Category</h1>
      <div className="flex flex-col gap-4 mt-4">
        <Input
          placeholder="Category Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button disabled={searchLoading} onClick={handleSearch}>
          {searchLoading ? "Searching..." : "Search"}
        </Button>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <Input
          placeholder="Edit Name"
          type="text"
          value={category?.name}
          onChange={(e) => setCategory({ ...category, name: e.target.value })}
        />
        <AddAlternatives
          Alternatives={category?.alternatives}
          setAlternatives={(alternatives) =>
            setCategory({ ...category, alternatives })
          }
        />

        <Button
          disabled={editLoading}
          className="w-full"
          onClick={handleEditCategory}
        >
          {editLoading ? "Editing..." : "Edit Category"}
        </Button>

        <Button
          disabled={deleteLoading}
          variant="destructive"
          className="w-full"
          onClick={handleDeleteCategory}
        >
          {deleteLoading ? "Deleting..." : "Delete Category"}
        </Button>
      </div>
    </div>
  );
}

export default memo(EditCategory);
