import type { Metadata } from "next";
import Script from "next/script";
import { Cinzel, Quattrocento } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const quattrocento = Quattrocento({
  variable: "--font-quattrocento",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Velvet Cow Brew and Booze | Mobile Bartending Services in The Woodlands & Houston",
    template: "%s | Velvet Cow Brew and Booze"
  },
  description: "Professional mobile bartending services in The Woodlands & Houston. Expert bartenders, custom cocktails, and stress-free event planning for weddings, corporate events, and celebrations.",
  keywords: [
    "mobile bartending",
    "bartending services", 
    "The Woodlands bartender",
    "Houston mobile bar",
    "wedding bartender",
    "corporate event bartending",
    "cocktail catering",
    "event bartending",
    "private party bartender",
    "signature cocktails",
    "Texas mobile bartending"
  ],
  authors: [{ name: "Velvet Cow Brew and Booze" }],
  creator: "Velvet Cow Brew and Booze",
  publisher: "Velvet Cow Brew and Booze",
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
    url: "https://www.velvet-cow.com",
    siteName: "Velvet Cow Brew and Booze",
    title: "Velvet Cow Brew and Booze | Mobile  Dry Hire Bartending Services in The Woodlands & Houston",
    description: "Professional mobile bartending services in The Woodlands & Houston. Expert bartenders, custom cocktails, and stress-free event planning for weddings, corporate events, and celebrations.",
    images: [
      {
        url: "https://www.velvet-cow.com/logo.png",
        width: 360,
        height: 120,
        alt: "Velvet Cow Brew and Booze Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velvet Cow Brew and Booze | Mobile Dry Hire Bartending Services",
    description: "Professional mobile bartending services in The Woodlands & Houston. Expert bartenders and custom cocktails for your special events.",
    images: ["https://www.velvet-cow.com/logo.png"],
  },
  alternates: {
    canonical: "https://www.velvet-cow.com",
  },
  other: {
    "business:contact_data:locality": "The Woodlands",
    "business:contact_data:region": "TX", 
    "business:contact_data:country_name": "USA",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${cinzel.variable} ${quattrocento.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M7TT0LZP6H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Enhanced GA4 configuration for ecommerce tracking
            gtag('config', 'G-M7TT0LZP6H', {
              // Enable enhanced ecommerce
              send_page_view: true,
              enhanced_ecommerce: true,
              // Custom event tracking settings
              custom_map: {
                'custom_parameter_1': 'package_selection',
                'custom_parameter_2': 'addon_selection',
                'custom_parameter_3': 'quote_sharing'
              },
              // Track engagement events
              engagement_time_msec: 100,
              // Debug mode for development (remove in production)
              debug_mode: ${process.env.NODE_ENV === 'development'}
            });
            
            // Track initial page load
            gtag('event', 'page_view', {
              page_title: 'Velvet Cow - Event Planning',
              page_location: window.location.href,
              custom_parameters: {
                section: 'homepage',
                timestamp: new Date().toISOString()
              }
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
