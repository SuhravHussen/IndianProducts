import { getSearchedProducts } from "@/actions/getSeachedProducts";
import ProductCard from "@/components/Product/ProductCard";

import { headers } from "next/headers";

export default async function page({ searchParams }) {
  const host = headers().get("host");

  const products = await getSearchedProducts(searchParams.query, host);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between sm:px-2  md:px-24 pt-10">
      {products.length > 0 ? (
        <div className="flex flex-wrap gap-4 justify-center ">
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}
