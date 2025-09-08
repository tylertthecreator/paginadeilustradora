import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Handcrafted Ceramics & Artisan Bags",
  description: "Explore Toska CR's portfolio of handcrafted ceramics and artisan bags. Each piece showcases unique design, sustainable craftsmanship, and artistic excellence.",
  openGraph: {
    title: "Portfolio - Handcrafted Ceramics & Artisan Bags",
    description: "Explore Toska CR's portfolio of handcrafted ceramics and artisan bags. Each piece showcases unique design and sustainable craftsmanship.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
