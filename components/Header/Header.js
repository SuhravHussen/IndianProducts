import Link from "next/link";
import Report from "./Report";
import { Search } from "./SearchBar";
import { Info } from "lucide-react";

export default function Header() {
  return (
    <section className="flex flex-col items-center justify-center  min-h-[60vh] w-[95%] mx-auto mb-9 mt-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
        <Link href={"/"}>Indian Products List</Link>
      </h1>
      <Search />
      <p className="text-center text-md my-8 w-[95%]">
        Indian Product Inventory in Bangladesh: A Guide for Informed Local
        Choices
      </p>
      <p className="text-center text-md  flex justify-center items-center gap-6 bg-yellow-100 p-4 rounded-lg">
        <Info /> পন্যের বারকোড ৮৯০ দিয়ে শুরু হলে সেটা ভারতীয় পন্য!
      </p>
      <Report />
    </section>
  );
}
