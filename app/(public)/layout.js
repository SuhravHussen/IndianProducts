import Header from "@/components/Header/Header";
import { Separator } from "@/components/ui/separator";

export default function RootLayout({ children }) {
  return (
    <div>
      <Header />
      <Separator />
      {children}
    </div>
  );
}
