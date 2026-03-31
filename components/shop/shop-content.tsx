"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Filter, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { products } from "@/lib/products";
import { siteConfig } from "@/config/site";
import { formatPrice } from "@/lib/utils";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 15000]);
  const [sortBy, setSortBy] = useState("newest");
  const [showBestSellers, setShowBestSellers] = useState(false);
  const [showNewArrivals, setShowNewArrivals] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category)
      );
    }

    // Filter by price
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Filter by best sellers
    if (showBestSellers) {
      filtered = filtered.filter((p) => p.isBestSeller);
    }

    // Filter by new arrivals
    if (showNewArrivals) {
      filtered = filtered.filter((p) => p.isNew);
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case "newest":
      default:
        // Keep original order for newest
        break;
    }

    return filtered;
  }, [selectedCategories, priceRange, sortBy, showBestSellers, showNewArrivals]);

  const toggleCategory = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug)
        ? prev.filter((c) => c !== slug)
        : [...prev, slug]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 15000]);
    setShowBestSellers(false);
    setShowNewArrivals(false);
    setSortBy("newest");
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < 15000 ||
    showBestSellers ||
    showNewArrivals;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-serif mb-4"
          >
            Shop All Jewellery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Discover our complete collection of handcrafted pieces
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {hasActiveFilters && (
                <span className="ml-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {selectedCategories.length + (showBestSellers ? 1 : 0) + (showNewArrivals ? 1 : 0)}
                </span>
              )}
            </Button>
            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} products
            </p>
          </div>

          <div className="flex items-center gap-4">
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear all
                <X className="h-4 w-4 ml-1" />
              </Button>
            )}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside
            className={`
              fixed lg:static inset-0 z-40 lg:z-0
              bg-background lg:bg-transparent
              w-full lg:w-64 shrink-0
              transform transition-transform duration-300 lg:transform-none
              ${showFilters ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}
          >
            <div className="h-full lg:h-auto overflow-y-auto p-6 lg:p-0">
              {/* Mobile header */}
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowFilters(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  Categories
                  <ChevronDown className="h-4 w-4" />
                </h3>
                <div className="space-y-3">
                  {siteConfig.categories.map((category) => (
                    <div key={category.slug} className="flex items-center">
                      <Checkbox
                        id={category.slug}
                        checked={selectedCategories.includes(category.slug)}
                        onCheckedChange={() => toggleCategory(category.slug)}
                      />
                      <Label
                        htmlFor={category.slug}
                        className="ml-2 text-sm cursor-pointer"
                      >
                        {category.name}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4">Price Range</h3>
                <Slider
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  min={0}
                  max={15000}
                  step={500}
                  className="mb-4"
                />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{formatPrice(priceRange[0])}</span>
                  <span>{formatPrice(priceRange[1])}</span>
                </div>
              </div>

              {/* Quick Filters */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4">Quick Filters</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Checkbox
                      id="bestsellers"
                      checked={showBestSellers}
                      onCheckedChange={(checked) =>
                        setShowBestSellers(checked as boolean)
                      }
                    />
                    <Label htmlFor="bestsellers" className="ml-2 text-sm cursor-pointer">
                      Best Sellers
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox
                      id="newarrivals"
                      checked={showNewArrivals}
                      onCheckedChange={(checked) =>
                        setShowNewArrivals(checked as boolean)
                      }
                    />
                    <Label htmlFor="newarrivals" className="ml-2 text-sm cursor-pointer">
                      New Arrivals
                    </Label>
                  </div>
                </div>
              </div>

              {/* Mobile Apply Button */}
              <div className="lg:hidden">
                <Button className="w-full" onClick={() => setShowFilters(false)}>
                  Show {filteredProducts.length} Results
                </Button>
              </div>
            </div>
          </aside>

          {/* Overlay for mobile */}
          {showFilters && (
            <div
              className="fixed inset-0 bg-foreground/50 z-30 lg:hidden"
              onClick={() => setShowFilters(false)}
            />
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">
                  No products found matching your filters.
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
