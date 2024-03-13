import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/Providers";

const inter = Open_Sans({ subsets: ["latin"] });

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
      <body className={inter.className + "font-fa"}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
