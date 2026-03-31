export const siteConfig = {
  brand: {
    name: process.env.NEXT_PUBLIC_BRAND_NAME || "tuliqe",
    tagline: process.env.NEXT_PUBLIC_BRAND_TAGLINE || "Elegance Redefined",
    description: "Discover exquisite handcrafted jewellery at tuliqe. From traditional jhumkas to modern oxidised earrings and beautiful gift boxes.",
  },
  contact: {
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919876543210",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@tuliqe.com",
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+919876543210",
  },
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/tuliqe",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/tuliqe",
    pinterest: process.env.NEXT_PUBLIC_PINTEREST_URL || "https://pinterest.com/tuliqe",
  },
  store: {
    address: process.env.NEXT_PUBLIC_ADDRESS || "123 Jewellery Lane, Fashion District, Mumbai 400001, India",
    hours: process.env.NEXT_PUBLIC_STORE_HOURS || "Mon-Sat: 10AM - 8PM",
  },
  map: {
    lat: parseFloat(process.env.NEXT_PUBLIC_MAP_LAT || "19.0760"),
    lng: parseFloat(process.env.NEXT_PUBLIC_MAP_LNG || "72.8777"),
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/shop?category=collections" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  categories: [
    { name: "Jhumkas", slug: "jhumkas", description: "Traditional elegance" },
    { name: "Oxidised Earrings", slug: "oxidised-earrings", description: "Timeless beauty" },
    { name: "Gift Boxes", slug: "gift-boxes", description: "Perfect presents" },
    { name: "Necklaces", slug: "necklaces", description: "Statement pieces" },
    { name: "Bangles", slug: "bangles", description: "Classic charm" },
    { name: "Combo Sets", slug: "combo-sets", description: "Curated collections" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
