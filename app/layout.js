import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/lib/ContextProvider";
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Indian Products",
  description: "List of Indian Products in Bangladesh",
  openGraph: {
    title: "Indian Products",
    description: "List of Indian Products in Bangladesh",
    url: "https://indian-products.vercel.app/",
    siteName: "Indian Products",
    images: [
      {
        url: "/Boycott-of-Indian-products.jpg",
        width: 1260,
        height: 800,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Products",
    description: "List of Indian Products in Bangladesh",
    images: [
      {
        url: "/Boycott-of-Indian-products.jpg",
        width: 1260,
        height: 800,
      },
    ],
  },
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  keywords: ["Indian Products", "List of Indian Products in Bangladesh"],
  applicationName: "Indian Products",
  icons: {
    icon: [
      {
        url: "/Boycott-of-Indian-products.jpg",
        sizes: "512x512",
        type: "image/jpg",
      },
    ],
  },
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
