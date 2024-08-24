"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { AlternativesDrawer } from "../Drawer/Alternatives";

//   https://via.placeholder.com/400x300
export default function ProductCard({ product }) {
  return (
    <Card className="w-40 md:w-60">
      <CardHeader>
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <CardDescription>Indian Product</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          placeholder="blur"
          blurDataURL={product.image}
        />
      </CardContent>
      <CardFooter>
        <AlternativesDrawer category={product.category} />
      </CardFooter>
    </Card>
  );
}
