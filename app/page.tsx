import { HeroSection } from "@/components/home/hero-section";
import { FeaturedCollections } from "@/components/home/featured-collections";
import { TrendingProducts } from "@/components/home/trending-products";
import { ComboBoxes } from "@/components/home/combo-boxes";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { CustomerReviews } from "@/components/home/customer-reviews";
import { InstagramGallery } from "@/components/home/instagram-gallery";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCollections />
      <TrendingProducts />
      <ComboBoxes />
      <WhyChooseUs />
      <CustomerReviews />
      <InstagramGallery />
    </>
  );
}
