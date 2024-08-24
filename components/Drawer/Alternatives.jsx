"use client";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { useState } from "react";

const DrawerContents = dynamic(() => import("./DrawerContent"), {
  ssr: false, // Set to `false` to disable server-side rendering for this component
});

export function AlternativesDrawer({ category }) {
  const [open, setOpen] = useState(false);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="" onClick={() => setOpen(true)}>
          Alternatives
        </Button>
      </DrawerTrigger>
      {open && <DrawerContents category={category} />}
    </Drawer>
  );
}
