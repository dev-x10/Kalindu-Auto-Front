import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/Providers";

const inter = Open_Sans({ subsets: ["latin"], fallback: ["system-ui"] });

export const metadata: Metadata = {
  title: "Kalindu - Auto",
  description: "Kalindu Auto POS System",
  generator: "Next.js",
  manifest: "/manifest.json",
  // viewport:
  //   "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
