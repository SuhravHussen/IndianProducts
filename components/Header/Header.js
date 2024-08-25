import Report from "./Report";
import { Search } from "./SearchBar";

export default function Header() {
  return (
    <section className="flex flex-col items-center justify-center  min-h-[60vh] w-[95%] mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
        Indian Products List
      </h1>
      <Search />
      <p className="text-center text-md my-8 w-[95%]">
        Identify and Boycott Indian Products in Bangladesh: Make a Stand for
        Local Choices
      </p>
      <p className="text-center text-md w-[95%]">
        বাংলাদেশে ভারতীয় পণ্য সনাক্ত করুন এবং বয়কট করুন: স্থানীয় পণ্যের পক্ষে
        দাঁড়ান
      </p>
      <Report />
    </section>
  );
}
