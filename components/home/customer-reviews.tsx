"use client";

import { reviews } from "@/lib/products";
import { SectionHeading } from "@/components/section-heading";
import { ReviewCard } from "@/components/review-card";

export function CustomerReviews() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          title="What Our Customers Say"
          subtitle="Join thousands of happy customers who have found their perfect jewellery"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
