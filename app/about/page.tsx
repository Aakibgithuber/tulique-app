import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gem, Heart, Users, Award } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.brand.name}'s journey in crafting exquisite handmade jewellery. Our story of passion, tradition, and modern elegance.`,
};

const values = [
  {
    icon: Gem,
    title: "Craftsmanship",
    description: "Every piece is meticulously handcrafted by skilled artisans who have inherited generations of expertise.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our love for jewellery drives us to create pieces that evoke emotion and celebrate life's special moments.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We empower local artisans and support traditional craftsmanship while building a global community of jewellery lovers.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We never compromise on quality. Each piece undergoes rigorous quality checks before reaching you.",
  },
];

const milestones = [
  { year: "2019", event: "Tulique was born from a passion for traditional Indian jewellery" },
  { year: "2020", event: "Launched our first collection of handcrafted jhumkas" },
  { year: "2021", event: "Expanded to oxidised earrings and gift boxes" },
  { year: "2022", event: "Reached 5,000+ happy customers across India" },
  { year: "2023", event: "Introduced curated gift boxes and combo sets" },
  { year: "2024", event: "Continuing our mission to bring elegance to every woman" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
                Our Story
              </span>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif mb-6 text-balance">
                Crafting Elegance,{" "}
                <span className="text-primary">One Piece at a Time</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
                {siteConfig.brand.name} was born from a deep love for traditional Indian jewellery 
                and a vision to make handcrafted elegance accessible to every woman. We believe 
                that jewellery is more than just an accessory, it is an expression of your unique story.
              </p>
              <Button size="lg" asChild>
                <Link href="/shop">
                  Explore Our Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/about-hero.jpg"
                  alt="Tulique craftsmanship"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-2xl shadow-xl hidden lg:block">
                <p className="text-4xl font-serif font-bold text-primary">5+</p>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To preserve the rich heritage of Indian jewellery craftsmanship while creating 
              modern designs that resonate with contemporary women. We aim to empower artisans, 
              celebrate tradition, and make every woman feel special with our handcrafted pieces.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif mb-4">What We Stand For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do, from design to delivery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From a small passion project to a beloved jewellery brand
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold text-sm">
                    {milestone.year.slice(-2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-px h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm text-primary font-medium">{milestone.year}</p>
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Founder */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl overflow-hidden max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/about/founder.jpg"
                alt="Founder of Tulique"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <span className="text-accent text-sm font-medium uppercase tracking-widest mb-4 block">
                Meet the Founder
              </span>
              <h2 className="text-3xl lg:text-4xl font-serif mb-6">
                A Vision Rooted in Tradition
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                {`"I grew up watching my grandmother adorn herself with beautiful traditional jewellery. 
                Each piece had a story, a memory attached to it. That love for meaningful jewellery 
                inspired me to create ${siteConfig.brand.name} - a brand that honors tradition while 
                embracing modern aesthetics."`}
              </p>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                {`"Today, every piece we create carries that same intention - to become a cherished 
                part of someone's story, a memory they'll treasure forever."`}
              </p>
              <p className="font-serif text-xl text-accent">- Founder, {siteConfig.brand.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif mb-4">
            Ready to Start Your {siteConfig.brand.name} Journey?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our collection and find the perfect piece that tells your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
