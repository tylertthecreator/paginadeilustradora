import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo-config";

export const metadata: Metadata = generatePageMetadata('work');

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
