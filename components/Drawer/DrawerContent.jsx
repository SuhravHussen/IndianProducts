"use client";

import React, { useEffect, useState } from "react";
import { DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import getAlternatives from "@/actions/getAlternatives";
export default function DrawerContents({ category }) {
  const [loading, setLoading] = useState(true);
  const [alternatives, setAlternatives] = useState([]);

  const handleAlternatives = async () => {
    try {
      setLoading(true);
      const data = await getAlternatives(category);
      setAlternatives(data.alternatives);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleAlternatives();
  }, []);
  return (
    <DrawerContent>
      <div className="h-[350px] p-5 flex flex-col overflow-y-auto hide-scrollbar">
        <DrawerTitle>
          <h1 className="text-center text-2xl ">Alternatives</h1>
        </DrawerTitle>
        <div className="  flex gap-4 flex-wrap mt-4">
          {/* if not loading and alternatives available */}
          {!loading &&
            alternatives.length > 0 &&
            alternatives.map((alt, i) => (
              <div key={i} className=" p-4 bg-slate-100 rounded-md">
                {alt}
              </div>
            ))}

          {/* if loading */}

          {loading && (
            <div className="mx-auto p-4 bg-slate-100 rounded-md">
              Loading...
            </div>
          )}

          {/* if not loading and no alternatives  */}

          {!loading && alternatives.length === 0 && (
            <div className="mx-auto p-4 bg-slate-100 rounded-md ">
              Sorry! No Information Available
            </div>
          )}
        </div>
      </div>
    </DrawerContent>
  );
}
