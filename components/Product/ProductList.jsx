"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useInView } from "react-intersection-observer";
import { getProducts } from "@/actions/getProducts";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import FilterProduct from "./FilterProduct";

export default function ProductList({ initialProducts, host }) {
  const [offset, setOffset] = useState(10);
  const [products, setproducts] = useState(initialProducts);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [sort, setSort] = useState("");
  const [scrollTrigger, isInView] = useInView();
  const [filter, setFilter] = useState("");

  const loadMoreproducts = async () => {
    if (hasMoreData) {
      const apiproducts = await getProducts(offset, 10, host, sort, filter);

      if (apiproducts.length == 0) {
        setHasMoreData(false);
      }

      setproducts((prevproducts) => [...prevproducts, ...apiproducts]);
      setOffset((prevOffset) => prevOffset + 10);
    }
  };

  useEffect(() => {
    if (isInView && hasMoreData) {
      loadMoreproducts();
    }
  }, [isInView, hasMoreData]);

  //handle filter change
  const handleFilterChange = (value) => {
    getProducts(0, 10, host, sort, value).then((data) => {
      console.log(data);
      setproducts(data);
      setOffset(10);
      setHasMoreData(true);
      setFilter(value);
    });
  };

  return (
    <>
      <div className="flex justify-center mb-4 w-[90%] mx-auto gap-4  sm:flex-row">
        <Select
          onValueChange={(value) => {
            getProducts(0, 10, host, value, filter).then((data) => {
              setproducts(data);
              setOffset(10);
              setHasMoreData(true);
              setSort(value);
            });
          }}
        >
          <SelectTrigger className="w-[50%]">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="asc">Name: A to Z</SelectItem>
              <SelectItem value="desc">Name: Z to A</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FilterProduct filter={filter} setFilter={handleFilterChange} />
      </div>

      <div className="flex flex-wrap gap-4 justify-center ">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="...">
        {(hasMoreData && (
          <div ref={scrollTrigger} className="mx-auto text-center">
            Loading...
          </div>
        )) || <p className="mx-auto text-center">No more products to load</p>}
      </div>
    </>
  );
}
