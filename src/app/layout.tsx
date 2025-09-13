import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import PageTransition from "@/components/PageTransition";

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
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/jnj4pru.css?v=2" />
        <link href="https://db.onlinewebfonts.com/c/ea90e636f79e82b61513ca71197744db?family=Temeraire+Display+Bk" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Font debugging script
              document.addEventListener('DOMContentLoaded', function() {
                console.log('Checking font loading...');
                document.fonts.ready.then(function() {
                  console.log('Fonts loaded');
                  
                  // Check if specific fonts are available
                  const testDiv = document.createElement('div');
                  testDiv.style.position = 'absolute';
                  testDiv.style.visibility = 'hidden';
                  testDiv.textContent = 'Test';
                  
                  // Test Mencken
                  testDiv.style.fontFamily = 'mencken-std, serif';
                  document.body.appendChild(testDiv);
                  const menckenStyle = window.getComputedStyle(testDiv);
                  console.log('Mencken font computed style:', menckenStyle.fontFamily);
                  
                  // Test Temeraire
                  testDiv.style.fontFamily = 'temeraire, serif';
                  const temeraireStyle = window.getComputedStyle(testDiv);
                  console.log('Temeraire font computed style:', temeraireStyle.fontFamily);
                  
                  document.body.removeChild(testDiv);
                  
                  // Check if fonts are actually loaded
                  console.log('Available fonts:', Array.from(document.fonts).map(font => font.family));
                });
              });
            `,
          }}
        />
      </head>
      <body
        className={`antialiased min-h-screen flex flex-col`}
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
