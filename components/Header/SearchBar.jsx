"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Search() {
  return (
    <div className="flex flex-col sm:flex-row w-full max-w-sm items-center space-x-2 gap-4">
      <Input type="text" placeholder="Search with name or type (eg: oil)" />
      <Button type="submit">Search</Button>
    </div>
  );
}
