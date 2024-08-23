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
        <CardTitle>Teer</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src="https://via.placeholder.com/400x300"
          alt="product image"
          width={150}
          height={150}
        />
      </CardContent>
      <CardFooter>
        <AlternativesDrawer />
      </CardFooter>
    </Card>
  );
}
