'use client';

import { seoConfig } from '@/lib/seo-config';

interface StructuredDataProps {
  type?: 'website' | 'about' | 'work' | 'contact' | 'shop';
}

export default function StructuredData({ type = 'website' }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": seoConfig.business.description,
      "description": seoConfig.site.description,
      "url": seoConfig.site.url,
      "logo": seoConfig.site.image,
      "image": seoConfig.site.image,
      "telephone": seoConfig.contact.phone,
      "email": seoConfig.contact.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": seoConfig.contact.address.street,
        "addressLocality": seoConfig.contact.address.city,
        "postalCode": seoConfig.contact.address.postalCode,
        "addressCountry": seoConfig.contact.address.country
      },
      "sameAs": [
        seoConfig.social.instagram,
        seoConfig.social.behance,
        seoConfig.social.linkedin
      ],
      "serviceArea": {
        "@type": "Country",
        "name": "Poland"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Handcrafted Ceramics & Artisan Bags",
        "itemListElement": seoConfig.business.services.map((service, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service
          },
          "position": index + 1
        }))
      }
    };

    // Add page-specific data
    switch (type) {
      case 'about':
        return {
          ...baseData,
          "@type": "Person",
          "name": "Toska CR",
          "jobTitle": "Ceramicist & Artisan",
          "description": seoConfig.pages.about.description
        };
      
      case 'work':
        return {
          ...baseData,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Portfolio - Handcrafted Ceramics & Artisan Bags",
            "description": seoConfig.pages.work.description,
            "itemListElement": seoConfig.business.services.map((service, index) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": service
              },
              "position": index + 1
            }))
          }
        };
      
      case 'contact':
        return {
          ...baseData,
          "description": seoConfig.pages.contact.description,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": seoConfig.contact.phone,
            "contactType": "customer service",
            "availableLanguage": ["English", "Polish"]
          }
        };
      
      case 'shop':
        return {
          ...baseData,
          "description": seoConfig.pages.shop.description,
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Shop - Handcrafted Ceramics & Artisan Bags",
            "description": seoConfig.pages.shop.description
          }
        };
      
      default:
        return baseData;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(), null, 2)
      }}
    />
  );
}
