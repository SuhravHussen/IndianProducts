import { getProducts } from "@/actions/getProducts";

import ProductList from "@/components/Product/ProductList";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Home() {
  const host = headers().get("host");

  const initialProducts = await getProducts(0, 10, host);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between sm:px-2  md:px-24 pt-10">
        <div className="flex flex-col gap-3">
          <ProductList initialProducts={initialProducts} host={host} />
        </div>
      </main>
    </>
  );
}
