import Header from "@/components/Header/Header";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Header />
      <Separator />
      {children}
    </div>
  );
}