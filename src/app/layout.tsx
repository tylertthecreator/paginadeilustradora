import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import PageTransition from "@/components/PageTransition";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { seoConfig } from "@/lib/seo-config";
import { analyticsConfig } from "@/lib/analytics";

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.site.url),
  title: {
    default: seoConfig.site.title,
    template: `%s | ${seoConfig.site.name}`
  },
  description: seoConfig.site.description,
  keywords: seoConfig.site.keywords,
  authors: [{ name: seoConfig.site.author, url: seoConfig.site.url }],
  creator: seoConfig.site.author,
  publisher: seoConfig.site.author,
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
    url: seoConfig.site.url,
    siteName: seoConfig.site.name,
    title: seoConfig.site.title,
    description: seoConfig.site.description,
    images: [
      {
        url: seoConfig.site.image,
        width: 1200,
        height: 630,
        alt: seoConfig.site.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.site.title,
    description: seoConfig.site.description,
    images: [seoConfig.site.image],
    creator: seoConfig.social.twitter,
  },
  verification: {
    google: "your-google-verification-code", // Will be updated when Google Search Console is set up
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
        <StructuredData type="website" />
        <GoogleAnalytics measurementId={analyticsConfig.measurementId} />
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
