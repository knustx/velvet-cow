export default function StructuredData() {
  const businessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.velvet-cow.com/#business",
    "name": "Velvet Cow Brew and Booze",
    "alternateName": "Velvet Cow",
    "description": "Professional dry hire bartending services in The Woodlands and Houston area. Expert bartenders for hire who bring their skills and expertise to your venue - you provide the bar setup and alcohol, we provide the professional service for weddings, corporate events, and celebrations.",
    "url": "https://www.velvet-cow.com",
    "telephone": "+1-XXX-XXX-XXXX", // Replace with your actual phone number
    "email": "info@velvet-cow.com", // Replace with your actual email
    "logo": "https://www.velvet-cow.com/logo.png",
    "image": [
      "https://www.velvet-cow.com/logo.png"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "The Woodlands",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.1588", // The Woodlands approximate coordinates
      "longitude": "-95.4894"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "The Woodlands",
        "sameAs": "https://en.wikipedia.org/wiki/The_Woodlands,_Texas"
      },
      {
        "@type": "City", 
        "name": "Houston",
        "sameAs": "https://en.wikipedia.org/wiki/Houston"
      },
      {
        "@type": "State",
        "name": "Texas"
      }
    ],
    "serviceType": "Dry Hire Bartending Service",
    "hasOfferingCatalog": {
      "@type": "OfferingCatalog",
      "name": "Dry Hire Bartending Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Dry Hire Bartending",
            "description": "Professional bartenders for hire for wedding celebrations - you provide the venue setup and alcohol, we provide skilled bartending service"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Event Dry Hire Bartending",
            "description": "Expert bartenders for hire for corporate events and business functions - professional service without the bar setup"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Private Party Dry Hire Bartending",
            "description": "Skilled bartenders for hire for private parties and celebrations - bring your alcohol and venue, we bring the expertise"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Bartending Skills",
            "description": "Expert mixology and bartending skills for hire - custom cocktails, professional service, and stress-free event hosting"
          }
        }
      ]
    },
    "priceRange": "$$",
    "paymentAccepted": ["Credit Card", "Check"],
    "currenciesAccepted": "USD",
    "foundingDate": "2025", // Adjust to your actual founding date
    "slogan": "Hosting should be joyful—not a juggling act",
    "keywords": "dry hire bartending, bartender for hire, wedding bartender hire, corporate event bartending, private party bartender, professional bartending service, The Woodlands, Houston, Texas, BYOB bartending",
    "sameAs": [
      "https://www.facebook.com/velvetcowbrew",
      "https://www.instagram.com/velvetcowbrew",
      "https://www.twitter.com/velvetcowbrew"
    ]
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.velvet-cow.com/#website",
    "url": "https://www.velvet-cow.com",
    "name": "Velvet Cow Brew and Booze",
    "description": "Professional dry hire bartending services in The Woodlands & Houston",
    "publisher": {
      "@type": "LocalBusiness",
      "@id": "https://www.velvet-cow.com/#business"
    }
  };

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dry Hire Bartending Service",
    "description": "Professional dry hire bartending services - skilled bartenders for hire who bring expertise to your venue. You provide the bar setup and alcohol, we provide the professional bartending service for weddings, corporate events, and private parties.",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.velvet-cow.com/#business"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "The Woodlands"
      },
      {
        "@type": "City",
        "name": "Houston"
      }
    ],
    "serviceType": "Event Services",
    "category": "Bartending Service",
    "hasOfferingCatalog": {
      "@type": "OfferingCatalog",
      "name": "Dry Hire Bartending Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Wedding Dry Hire Package",
          "description": "Professional bartenders for hire for weddings - you provide venue and alcohol, we provide skilled service"
        },
        {
          "@type": "Offer", 
          "name": "Corporate Dry Hire Package",
          "description": "Expert bartenders for hire for corporate events - professional service without bar setup"
        },
        {
          "@type": "Offer",
          "name": "Private Party Dry Hire Package",
          "description": "Skilled bartenders for hire for private celebrations - BYOB with professional expertise"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceStructuredData),
        }}
      />
    </>
  );
}