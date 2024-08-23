import AddCategory from "@/components/Admin/AddCategory";
import AddProduct from "@/components/Admin/AddProduct";
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <section className="flex flex-col justify-center mx-auto p-8 max-w-[760px] gap-10">
      <AddProduct />
      <Separator />
      <AddCategory />
    </section>
  );
}
