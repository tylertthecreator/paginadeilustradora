import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://toskacr.com'),
  title: {
    default: "Toska CR - Handcrafted Ceramics & Artisan Bags",
    template: "%s | Toska CR"
  },
  description: "Discover unique handcrafted ceramics and artisan bags by Toska CR. Each piece tells a story of passion, creativity, and sustainable craftsmanship. Shop handmade pottery, leather bags, and custom pieces.",
  keywords: [
    "handcrafted ceramics", "artisan bags", "handmade pottery", "leather handbags", 
    "custom ceramics", "sustainable art", "handmade gifts", "pottery studio", 
    "artisan crafts", "unique ceramics", "handmade bags", "creative portfolio"
  ],
  authors: [{ name: "Toska CR", url: "https://toskacr.com" }],
  creator: "Toska CR",
  publisher: "Toska CR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toskacr.com",
    siteName: "Toska CR",
    title: "Toska CR - Handcrafted Ceramics & Artisan Bags",
    description: "Discover unique handcrafted ceramics and artisan bags by Toska CR. Each piece tells a story of passion, creativity, and sustainable craftsmanship.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Toska CR - Handcrafted Ceramics & Artisan Bags",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toska CR - Handcrafted Ceramics & Artisan Bags",
    description: "Discover unique handcrafted ceramics and artisan bags by Toska CR. Each piece tells a story of passion, creativity, and sustainable craftsmanship.",
    images: ["/og-image.jpg"],
    creator: "@toskacr",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ErrorBoundary>
          <Header />
          <main className="flex-1">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
