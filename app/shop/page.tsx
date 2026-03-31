import { Metadata } from "next";
import { Suspense } from "react";
import { ShopContent } from "@/components/shop/shop-content";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Shop",
  description: `Explore our complete collection of handcrafted jewellery at ${siteConfig.brand.name}. Find jhumkas, oxidised earrings, gift boxes and more.`,
};

function ShopLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-secondary py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="h-10 w-64 bg-muted animate-pulse rounded mx-auto mb-4" />
          <div className="h-5 w-96 bg-muted animate-pulse rounded mx-auto" />
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square bg-muted animate-pulse rounded-lg" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopLoading />}>
      <ShopContent />
    </Suspense>
  );
}
