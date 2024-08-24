"use client";

import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import KeywordSelector from "./KeywordSelector";
import { getProductWithName } from "@/actions/getProductWithName";
import { SelectCategories } from "./SelectCategories";
import { updatedProduct } from "@/actions/updateProduct";
import { useToast } from "../ui/use-toast";
import { deleteProduct } from "@/actions/deleteProduct";

export default function EditProduct() {
  // states
  const [product, setProduct] = useState({});
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const { toast } = useToast();

  const handleSearch = async () => {
    setSearchLoading(true);
    try {
      const productRes = await getProductWithName(name);
      setProduct(productRes);
    } catch {
    } finally {
      setSearchLoading(false);
    }
  };

  const handleEditProduct = async () => {
    setLoading(true);
    try {
      const res = await updatedProduct(product);
      if (res.success) {
        toast({
          title: "Product Updated",
        });
      } else {
        toast({
          title: "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // delete product
  const handleDeleteProduct = async () => {
    setDeleteLoading(true);
    try {
      const res = await deleteProduct(product._id);

      if (res.success) {
        toast({
          title: "Product Deleted",
        });
      } else {
        toast({
          title: "Something went wrong",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setDeleteLoading(false);
    }
  };

  // get category list
  useEffect(() => {
    const getCategoryList = async () => {
      try {
        const res = await fetch("/api/admin/category");
        const data = await res.json();
        setCategoryList(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategoryList();
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">Edit Product</h1>
      <div className="flex flex-col gap-4 mt-4">
        <Input
          placeholder="Product Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          disabled={searchLoading}
          className="w-full"
          onClick={handleSearch}
        >
          {searchLoading ? "Searching..." : "Search"}
        </Button>

        <div className="flex flex-col gap-4">
          <Input
            placeholder="Edit Name"
            type="text"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <KeywordSelector
            keywords={product.keywords}
            setKeywords={(keywords) => setProduct({ ...product, keywords })}
          />

          <SelectCategories
            label={"Category"}
            placeholder={"Select Category"}
            list={categoryList}
            setCategory={(category) => setProduct({ ...product, category })}
          />

          <Button
            disabled={loading}
            className="w-full"
            onClick={handleEditProduct}
          >
            {loading ? "Editing..." : "Update Product"}
          </Button>

          <Button
            disabled={deleteLoading}
            variant="destructive"
            className="w-full"
            onClick={handleDeleteProduct}
          >
            {deleteLoading ? "Deleting..." : "Delete Product"}
          </Button>
        </div>
      </div>
    </div>
  );
}
