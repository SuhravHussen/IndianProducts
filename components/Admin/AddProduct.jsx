"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import KeywordSelector from "./KeywordSelector";
import { SelectCategories } from "./SelectCategories";
import { useToast } from "@/components/ui/use-toast";
import addProduct from "@/actions/addProduct";

export default function AddProduct() {
  // states
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const { toast } = useToast();

  // add product in server
  const handleAddProduct = async () => {
    setLoading(true);
    try {
      const data = await addProduct(name, image, keywords, category, toast);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
      <h1 className="text-xl font-bold">Add Product</h1>

      <div className="flex flex-col gap-4 mt-4 justify-center">
        <Input
          placeholder="Product Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
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
          list={categoryList}
          setCategory={setCategory}
        />
        <KeywordSelector keywords={keywords} setKeywords={setKeywords} />

        <Button onClick={handleAddProduct} disabled={loading}>
          {loading ? "Loading..." : "Add Product"}
        </Button>
      </div>
    </div>
  );
}
