"use client";

import { useEffect, useState } from "react";
import { SelectCategories } from "./SelectCategories";

function FilterProduct({ filter, setFilter }) {
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
    <div className="w-[50%]">
      <SelectCategories
        placeholder={"Select Category"}
        list={categoryList}
        label={"Category"}
        setCategory={setFilter}
      />
    </div>
  );
}

export default FilterProduct;
