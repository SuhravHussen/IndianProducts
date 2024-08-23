"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useInView } from "react-intersection-observer";
import { getProducts } from "@/actions/getProducts";

export default function ProductList({ initialProducts }) {
  const [offset, setOffset] = useState(10);
  const [products, setproducts] = useState(initialProducts);
  const [hasMoreData, setHasMoreData] = useState(true);

  const [scrollTrigger, isInView] = useInView();

  const loadMoreproducts = async () => {
    if (hasMoreData) {
      const apiproducts = await getProducts(offset, 10);

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

  console.log("products-", products);
  return (
    <>
      <h1 className="font-bold ml-20 mb-6 ">Total Products- 300</h1>
      <div className="flex flex-wrap gap-4 justify-center ">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
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
