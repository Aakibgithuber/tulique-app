"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-8 lg:mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="text-3xl lg:text-4xl font-serif text-foreground text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-pretty">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
