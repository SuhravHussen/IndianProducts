"use client";

import { Separator } from "@/components/ui/separator";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Layout({ children }) {
  const { user } = useUser();

  return (
    <div>
      <div className="min-h-[20vh] flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold ">Admin Panel - {user?.email}</h1>
      </div>
      <Separator />
      {children}
    </div>
  );
}
