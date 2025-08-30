import type { Metadata } from "next";
import { Cinzel, Quattrocento } from "next/font/google";
import "./globals.css";
import "./safari-compat.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${quattrocento.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
