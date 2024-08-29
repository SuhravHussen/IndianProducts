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
import Skeletons from "../Skeleton/Skeleton";

export default function ProductList({ initialProducts, host }) {
  const [offset, setOffset] = useState(10);
  const [products, setproducts] = useState(initialProducts);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [sort, setSort] = useState("");
  const [scrollTrigger, isInView] = useInView();
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);

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
    if (isInView && hasMoreData && !loading) {
      loadMoreproducts();
    }
  }, [isInView, hasMoreData, loading]);

  //handle filter change
  const handleFilterChange = (value) => {
    setLoading(true);
    getProducts(0, 10, host, sort, value)
      .then((data) => {
        setproducts(data);
        setOffset(10);
        setHasMoreData(true);
        setFilter(value);
      })
      .finally(() => setLoading(false));
  };

  // handle sort change
  const handleSortChange = (value) => {
    setLoading(true);
    getProducts(0, 10, host, value, filter)
      .then((data) => {
        setproducts(data);
        setOffset(10);
        setHasMoreData(true);
        setSort(value);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <div className="flex justify-center mb-4 w-[90%] mx-auto gap-4  sm:flex-row">
        <Select onValueChange={handleSortChange}>
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
        {!loading &&
          products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
      </div>
      <div className="...">
        {(hasMoreData && (
          <div ref={scrollTrigger} className="mx-auto text-center">
            Loading...
          </div>
        )) || (
          <p className="mx-auto text-center font-bold p-8">
            No more products to load
          </p>
        )}

        {loading && <Skeletons />}
      </div>
    </>
  );
}
