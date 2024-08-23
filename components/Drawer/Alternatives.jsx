import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Badge } from "../ui/badge";

export function AlternativesDrawer() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="">Alternatives</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="min-h-[350px] p-5 flex flex-col">
          <DrawerTitle>
            <h1 className="text-center text-2xl">Alternatives</h1>
          </DrawerTitle>
          <div className="  flex gap-4 flex-wrap mt-4">
            <div className="mr-auto p-4 bg-slate-100 rounded-md">
              Alternative One
            </div>
            <div className="mr-auto p-4 bg-slate-100 rounded-md">
              Alternative One
            </div>
            <div className="mr-auto p-4 bg-slate-100 rounded-md">
              Alternative One
            </div>
            <div className="mr-auto p-4 bg-slate-100 rounded-md">
              Alternative One
            </div>
            <div className="mr-auto p-4 bg-slate-100 rounded-md">
              Alternative One
            </div>
            <div className="mr-auto p-4 bg-slate-100 rounded-md">
              Alternative One
            </div>
            <div className="mr-auto p-4 bg-slate-100 rounded-md">
              Alternative One
            </div>
            <div className="mr-auto p-4 bg-slate-100 rounded-md">
              Alternative One
            </div>
            <div className="mr-auto p-4 bg-slate-100 rounded-md">
              Alternative One
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
