"use client";

import { useEffect, useState } from "react";
import { SelectCategories } from "./SelectCategories";

function FilterProduct() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = async () => {
    try {
      const res = await fetch("/api/admin/category");
      const data = await res.json();
      setCategoryList(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div>
      <SelectCategories
        placeholder={"Select Category"}
        list={categoryList}
        label={"Category"}
        setCategory={setSelectedCategory}
      />
    </div>
  );
}

export default FilterProduct;
