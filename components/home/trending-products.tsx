"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products";
import { SectionHeading } from "@/components/section-heading";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";

export function TrendingProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Trending Now"
          subtitle="Our most loved pieces, curated for the modern woman"
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/shop">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
