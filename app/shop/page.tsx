import { Metadata } from "next";
import { ShopContent } from "@/components/shop/shop-content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Shop",
  description: `Explore our complete collection of handcrafted jewellery at ${siteConfig.brand.name}. Find jhumkas, oxidised earrings, gift boxes and more.`,
};

export default function ShopPage() {
  return <ShopContent />;
}
