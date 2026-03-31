import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { siteConfig } from "@/config/site";
import { CartProvider } from "@/lib/cart-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brand.name} - ${siteConfig.brand.tagline}`,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description: siteConfig.brand.description,
  keywords: [
    "jewellery",
    "jhumkas",
    "oxidised earrings",
    "gift boxes",
    "fashion jewellery",
    "Indian jewellery",
    "traditional earrings",
    "bridal jewellery",
  ],
  authors: [{ name: siteConfig.brand.name }],
  creator: siteConfig.brand.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.brand.name,
    title: `${siteConfig.brand.name} - ${siteConfig.brand.tagline}`,
    description: siteConfig.brand.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand.name} - ${siteConfig.brand.tagline}`,
    description: siteConfig.brand.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#8B4D5C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} font-sans`}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen pt-16 lg:pt-20">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
