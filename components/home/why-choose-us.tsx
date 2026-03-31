"use client";

import { motion } from "framer-motion";
import { 
  Gem, 
  Truck, 
  ShieldCheck, 
  Sparkles, 
  Heart,
  RefreshCw
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/section-heading";

const features = [
  {
    icon: Gem,
    title: "Handcrafted Excellence",
    description: "Each piece is meticulously crafted by skilled artisans using traditional techniques passed down through generations.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "We use only premium materials with anti-tarnish coating to ensure your jewellery stays beautiful for years.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Enjoy complimentary shipping on all orders above Rs. 999. Fast and secure delivery across India.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "Not satisfied? Return within 7 days for a full refund. No questions asked.",
  },
  {
    icon: Heart,
    title: "Gift Packaging",
    description: "Every order comes in our signature packaging, making it perfect for gifting or keeping for yourself.",
  },
  {
    icon: Sparkles,
    title: "Unique Designs",
    description: "Exclusive designs you won't find anywhere else. Stand out with our distinctive collections.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif mb-3 text-balance">
            Why Choose {siteConfig.brand.name}
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Experience the difference of authentic craftsmanship and exceptional service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
