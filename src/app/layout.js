"use client";
import { Open_Sans } from "next/font/google";
import { Providers } from "./provider";
import NavBar from "@/components/layout/Navbar";
const inter = Open_Sans({ subsets: ["latin"] });
import { motion } from "framer-motion";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark text-foreground bg-background`}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );

}
