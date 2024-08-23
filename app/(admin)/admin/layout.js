"use client";

import { Separator } from "@/components/ui/separator";

export default function layout({ children }) {
  return (
    <div>
      <div className="min-h-[20vh] flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold ">Admin Panel</h1>
      </div>
      <Separator />
      {children}
    </div>
  );
}
