import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/lib/ContextProvider";
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Indian Products",
  description: "List of Indian Products in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <Provider>
          <body className={inter.className}>
            {children}
            <Toaster />
          </body>
        </Provider>
      </UserProvider>
    </html>
  );
}
