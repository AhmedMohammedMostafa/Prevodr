"use client";
import HeroSection from "@/components/sections/home/HeroSection";
import { Image, Button, Spacer } from "@nextui-org/react";
import { subtitle, title } from "@/components/layout/primitives";
import BrandScrollingBanner from "@/components/sections/home/BrandScrollingBanner";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrandScrollingBanner />
    </main>
  );
}
