"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import { useState } from "react";

export function Search() {
  const [query, setQuery] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  return (
    <form
      className="flex flex-col sm:flex-row w-full max-w-sm items-center space-x-2 gap-4"
      onSubmit={handleSubmit}
    >
      <Input
        type="search"
        placeholder="Search with name or type (eg: oil)"
        onChange={(e) => setQuery(e.target.value)}
        onSubmit={(e) => e.preventDefault()}
      />

      <Button type="submit">Search</Button>
    </form>
  );
}
