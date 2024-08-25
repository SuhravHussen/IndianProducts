import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-8 sm:px-2  md:px-24 pt-10">
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} className="w-40 md:w-60 h-64" />
        ))}
    </div>
  );
}
