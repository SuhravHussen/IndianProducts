import { getProducts } from "@/actions/getProducts";

import ProductList from "@/components/Product/ProductList";

export default async function Home() {
  const initialProducts = await getProducts(0, 10);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between sm:px-2  md:px-24 pt-10">
        <div className="flex flex-col gap-3">
          <ProductList initialProducts={initialProducts} />
        </div>
      </main>
    </>
  );
}
