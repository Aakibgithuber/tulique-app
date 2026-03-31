"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

const instagramPosts = [
  { id: 1, image: "/images/instagram/insta-1.jpg", likes: 234 },
  { id: 2, image: "/images/instagram/insta-2.jpg", likes: 189 },
  { id: 3, image: "/images/instagram/insta-3.jpg", likes: 312 },
  { id: 4, image: "/images/instagram/insta-4.jpg", likes: 267 },
  { id: 5, image: "/images/instagram/insta-5.jpg", likes: 198 },
  { id: 6, image: "/images/instagram/insta-6.jpg", likes: 345 },
];

export function InstagramGallery() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Instagram className="h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider">
              @{siteConfig.brand.name.toLowerCase()}
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif mb-3 text-balance">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get inspired by our latest collections and see how our community styles their {siteConfig.brand.name} pieces
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={post.image}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-background text-center">
                  <Instagram className="h-6 w-6 mx-auto mb-1" />
                  <span className="text-sm font-medium">{post.likes} likes</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Instagram className="h-4 w-4" />
              Follow Us on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
