import type { Metadata } from "next";
import { Cinzel, Quattrocento } from "next/font/google";
import "./globals.css";

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
  title: "Velvet Cow",
  description: "A Next.js application built with Tailwind CSS",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M7TT0LZP6H"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
            `,
          }}
        />
      </head>
      <body
        className={`${cinzel.variable} ${quattrocento.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
