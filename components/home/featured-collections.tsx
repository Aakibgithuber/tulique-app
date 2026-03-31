"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/section-heading";

const collections = [
  {
    name: "Jhumkas",
    slug: "jhumkas",
    image: "/images/collections/jhumkas.jpg",
    description: "Traditional elegance for every occasion",
    productCount: 45,
  },
  {
    name: "Oxidised Earrings",
    slug: "oxidised-earrings",
    image: "/images/collections/oxidised.jpg",
    description: "Timeless beauty in silver tones",
    productCount: 32,
  },
  {
    name: "Gift Boxes",
    slug: "gift-boxes",
    image: "/images/collections/giftboxes.jpg",
    description: "Perfect presents for loved ones",
    productCount: 18,
  },
];

export function FeaturedCollections() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Explore Our Collections"
          subtitle="Discover handcrafted pieces that celebrate tradition with a modern touch"
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/shop?category=${collection.slug}`}
                className="group block relative aspect-[4/5] rounded-2xl overflow-hidden"
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-background">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
                    {collection.productCount} Products
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-serif mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-background/80 text-sm mb-4">
                    {collection.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-medium group-hover:gap-4 transition-all">
                    <span>Shop Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
