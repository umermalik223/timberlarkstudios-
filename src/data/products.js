// src/data/products.js
export const products = [
  {
    id: 1,
    name: "Solace Chair",
    price: 340.00,
    category: "seating",
    description: "Relax in style with the Solace Chair—featuring plush cushions, UV-resistant fabric, and adjustable comfort for the perfect outdoor experience.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop"
    ],
    featured: true,
    inStock: true,
    materials: ["Teak Wood", "Premium Fabric", "Stainless Steel"],
    dimensions: "32\"W x 34\"D x 30\"H",
    reviews: 47
  },
  {
    id: 2,
    name: "Breeze Lounge Chair",
    price: 420.00,
    category: "seating",
    description: "Experience ultimate relaxation with our Breeze Lounge Chair. Crafted with sustainable materials and ergonomic design.",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop"
    ],
    featured: true,
    inStock: true,
    materials: ["Reclaimed Wood", "Organic Cotton", "Brass"],
    dimensions: "30\"W x 36\"D x 32\"H",
    reviews: 32
  },
  {
    id: 3,
    name: "Heritage Dining Table",
    price: 1250.00,
    category: "tables",
    description: "A masterpiece of craftsmanship, the Heritage Dining Table combines traditional woodworking with contemporary design.",
    image: "https://images.unsplash.com/photo-1549497538-303791108f95?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1549497538-303791108f95?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&h=800&fit=crop"
    ],
    featured: false,
    inStock: true,
    materials: ["Solid Oak", "Steel Frame"],
    dimensions: "84\"L x 42\"W x 30\"H",
    reviews: 23
  },
  {
    id: 4,
    name: "Modern Desk Lamp",
    price: 185.00,
    category: "lighting",
    description: "Illuminate your workspace with this sleek, adjustable desk lamp featuring LED technology and minimalist design.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
    ],
    featured: false,
    inStock: true,
    materials: ["Aluminum", "LED", "Weighted Base"],
    dimensions: "24\"H x 8\"W",
    reviews: 15
  },
  {
    id: 5,
    name: "Comfort Sectional Sofa",
    price: 2100.00,
    category: "seating",
    description: "Luxurious sectional sofa perfect for entertaining. Features premium upholstery and modular design.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop"
    ],
    featured: true,
    inStock: false,
    materials: ["Hardwood Frame", "Premium Fabric", "High-Density Foam"],
    dimensions: "108\"L x 84\"W x 32\"H",
    reviews: 89
  },
  {
    id: 6,
    name: "Minimalist Coffee Table",
    price: 680.00,
    category: "tables",
    description: "Clean lines and functional design meet in this stunning coffee table. Perfect centerpiece for modern living rooms.",
    image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=800&h=800&fit=crop"
    ],
    featured: false,
    inStock: true,
    materials: ["Walnut Wood", "Glass Top", "Steel Legs"],
    dimensions: "48\"L x 24\"W x 16\"H",
    reviews: 34
  }
]

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'seating', name: 'Seating', count: products.filter(p => p.category === 'seating').length },
  { id: 'tables', name: 'Tables', count: products.filter(p => p.category === 'tables').length },
  { id: 'lighting', name: 'Lighting', count: products.filter(p => p.category === 'lighting').length },
  { id: 'storage', name: 'Storage', count: products.filter(p => p.category === 'storage').length }
]