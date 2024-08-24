"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export function Search() {
  const [query, setQuery] = useState("");
  return (
    <div className="flex flex-col sm:flex-row w-full max-w-sm items-center space-x-2 gap-4">
      <Input
        type="text"
        placeholder="Search with name or type (eg: oil)"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Link href={`/search?query=${query}`}>
        <Button type="submit">Search</Button>
      </Link>
    </div>
  );
}
