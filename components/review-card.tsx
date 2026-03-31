"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";
import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
  index?: number;
}

export function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card p-6 rounded-lg border border-border"
    >
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < review.rating
                ? "fill-accent text-accent"
                : "text-border"
            }`}
          />
        ))}
      </div>
      <p className="text-foreground/80 mb-4 leading-relaxed">{`"${review.comment}"`}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-semibold">
              {review.author.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-medium text-foreground">{review.author}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(review.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
        {review.verified && (
          <div className="flex items-center gap-1 text-xs text-primary">
            <CheckCircle className="h-3 w-3" />
            <span>Verified</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
