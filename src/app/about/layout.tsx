import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Toska CR - Artist & Ceramicist",
  description: "Learn about Toska CR's creative journey in ceramics and handbag design. Discover the philosophy behind sustainable, handmade art and the passion that drives each unique piece.",
  openGraph: {
    title: "About Toska CR - Artist & Ceramicist",
    description: "Learn about Toska CR's creative journey in ceramics and handbag design. Discover the philosophy behind sustainable, handmade art.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
