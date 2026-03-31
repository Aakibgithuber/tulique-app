"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Gift, Sparkles, Package } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const comboBoxes = [
  {
    id: 1,
    name: "Bridal Bliss Box",
    description: "Complete bridal set with jhumkas, necklace, bangles & maang tikka",
    price: 8999,
    originalPrice: 12999,
    image: "/images/combos/bridal-box.jpg",
    items: 5,
    icon: Sparkles,
    gradient: "from-primary/20 to-accent/20",
  },
  {
    id: 2,
    name: "Festive Favourites",
    description: "Curated collection of 3 earring pairs perfect for celebrations",
    price: 4499,
    originalPrice: 6499,
    image: "/images/combos/festive-box.jpg",
    items: 3,
    icon: Gift,
    gradient: "from-accent/20 to-primary/20",
  },
  {
    id: 3,
    name: "Everyday Elegance",
    description: "5 versatile pieces for daily wear - from minimal to statement",
    price: 2999,
    originalPrice: 4499,
    image: "/images/combos/everyday-box.jpg",
    items: 5,
    icon: Package,
    gradient: "from-primary/10 to-accent/30",
  },
];

export function ComboBoxes() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="Curated Gift Boxes"
          subtitle="Thoughtfully assembled collections that make gifting effortless and memorable"
        />

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {comboBoxes.map((box, index) => {
            const Icon = box.icon;
            return (
              <motion.div
                key={box.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-shadow duration-500"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${box.gradient} opacity-50`} />
                
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={box.image}
                    alt={box.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Save {formatPrice(box.originalPrice - box.price)}
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-1">
                        {box.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {box.items} pieces included
                      </p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {box.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-semibold text-primary">
                        {formatPrice(box.price)}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(box.originalPrice)}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full mt-4" asChild>
                    <Link href={`/shop?category=combo-sets`}>
                      Shop This Box
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
