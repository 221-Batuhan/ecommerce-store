import { Product } from "../../types/Product";

export const products: Product[] = [
    {
        id: 1,
        name: "Classic Navy Blue Suit",
        description: "A timeless navy blue suit crafted from premium Italian wool. Features a modern slim-fit cut with a single-breasted design, perfect for business meetings and formal occasions. Includes matching trousers with a flat front design.",
        price: 899.99,
        originalPrice: 1299.99,
        images: [
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
        ],
        category: "Suits",
        subcategory: "Business Suits",
        brand: "Savile Row",
        rating: 4.9,
        reviewCount: 247,
        inStock: true,
        stockCount: 25,
        features: [
            "Premium Italian wool fabric",
            "Slim-fit modern cut",
            "Single-breasted design",
            "Matching flat-front trousers",
            "Fully lined construction"
        ],
        specifications: {
            "Fabric": "100% Italian Wool",
            "Fit": "Slim",
            "Style": "Single-breasted",
            "Lining": "Full",
            "Buttons": "2-button closure"
        },
        tags: ["suit", "navy", "business", "formal", "wool"],
        createdAt: new Date("2023-01-15"),
        updatedAt: new Date("2024-01-15")
    },
    {
        id: 2,
        name: "Cashmere Blend Turtleneck Sweater",
        description: "Luxurious cashmere blend turtleneck sweater in a sophisticated charcoal color. Ultra-soft and warm, perfect for layering under suits or wearing casually. Features a ribbed knit pattern and a comfortable fit.",
        price: 299.99,
        originalPrice: 399.99,
        images: [
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=600&fit=crop"
        ],
        category: "Sweaters",
        subcategory: "Turtlenecks",
        brand: "Luxury Knits",
        rating: 4.8,
        reviewCount: 156,
        inStock: true,
        stockCount: 42,
        features: [
            "70% cashmere, 30% wool blend",
            "Ribbed knit pattern",
            "Turtleneck design",
            "Ultra-soft and warm",
            "Available in multiple colors"
        ],
        specifications: {
            "Material": "70% Cashmere, 30% Wool",
            "Fit": "Regular",
            "Pattern": "Ribbed",
            "Care": "Dry clean only",
            "Weight": "Lightweight"
        },
        tags: ["sweater", "cashmere", "turtleneck", "winter", "luxury"],
        createdAt: new Date("2022-10-20"),
        updatedAt: new Date("2024-01-15")
    },
    {
        id: 3,
        name: "Leather Bomber Jacket",
        description: "Classic leather bomber jacket with a modern twist. Made from premium full-grain leather with a quilted lining for warmth and comfort. Features ribbed cuffs and hem, and a zip-up front closure.",
        price: 599.99,
        originalPrice: 799.99,
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&h=600&fit=crop"
        ],
        category: "Outerwear",
        subcategory: "Jackets",
        brand: "Heritage Leather",
        rating: 4.7,
        reviewCount: 189,
        inStock: true,
        stockCount: 38,
        features: [
            "Full-grain leather construction",
            "Quilted lining for warmth",
            "Ribbed cuffs and hem",
            "Zip-up front closure",
            "Multiple interior pockets"
        ],
        specifications: {
            "Material": "Full-grain Leather",
            "Lining": "Quilted",
            "Closure": "Zipper",
            "Fit": "Regular",
            "Care": "Leather conditioner"
        },
        tags: ["jacket", "leather", "bomber", "outerwear", "classic"],
        createdAt: new Date("2021-09-15"),
        updatedAt: new Date("2024-01-15")
    },
    {
        id: 4,
        name: "Premium Cotton Oxford Shirt",
        description: "Classic Oxford cotton shirt in a timeless white color. Features a button-down collar, chest pocket, and a comfortable regular fit. Perfect for both casual and business casual occasions.",
        price: 89.99,
        originalPrice: 129.99,
        images: [
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1603252109303-b8d0c5a9a4c2?w=800&h=600&fit=crop"
        ],
        category: "Shirts",
        subcategory: "Oxford Shirts",
        brand: "Classic Threads",
        rating: 4.6,
        reviewCount: 342,
        inStock: true,
        stockCount: 89,
        features: [
            "100% premium cotton Oxford fabric",
            "Button-down collar",
            "Chest pocket",
            "Regular fit",
            "Machine washable"
        ],
        specifications: {
            "Material": "100% Cotton Oxford",
            "Fit": "Regular",
            "Collar": "Button-down",
            "Care": "Machine wash",
            "Weight": "Medium"
        },
        tags: ["shirt", "oxford", "cotton", "classic", "versatile"],
        createdAt: new Date("2020-08-15"),
        updatedAt: new Date("2024-01-15")
    },
    {
        id: 5,
        name: "Silk Pocket Square Set",
        description: "Elegant silk pocket square set featuring four classic patterns. Made from 100% pure silk with hand-rolled edges for a luxurious finish. Perfect for adding a sophisticated touch to any suit or blazer.",
        price: 79.99,
        originalPrice: 99.99,
        images: [
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=600&fit=crop"
        ],
        category: "Accessories",
        subcategory: "Pocket Squares",
        brand: "Silk & Style",
        rating: 4.8,
        reviewCount: 94,
        inStock: true,
        stockCount: 67,
        features: [
            "100% pure silk fabric",
            "Hand-rolled edges",
            "Four classic patterns",
            "Luxurious finish",
            "Perfect gift set"
        ],
        specifications: {
            "Material": "100% Silk",
            "Size": "12\" x 12\"",
            "Edges": "Hand-rolled",
            "Care": "Dry clean only",
            "Patterns": "4 different designs"
        },
        tags: ["pocket square", "silk", "accessories", "formal", "gift"],
        createdAt: new Date("2021-12-10"),
        updatedAt: new Date("2024-01-15")
    },
    {
        id: 6,
        name: "Wool Blend Overcoat",
        description: "Sophisticated wool blend overcoat in a deep charcoal color. Features a classic double-breasted design with peak lapels and a belt closure. Perfect for winter months and formal occasions.",
        price: 699.99,
        originalPrice: 999.99,
        images: [
            "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=600&fit=crop"
        ],
        category: "Outerwear",
        subcategory: "Overcoats",
        brand: "Heritage Wool",
        rating: 4.9,
        reviewCount: 78,
        inStock: true,
        stockCount: 23,
        features: [
            "Premium wool blend fabric",
            "Double-breasted design",
            "Peak lapels",
            "Belt closure",
            "Fully lined construction"
        ],
        specifications: {
            "Material": "80% Wool, 20% Cashmere",
            "Style": "Double-breasted",
            "Lapels": "Peak",
            "Lining": "Full",
            "Closure": "Belt"
        },
        tags: ["overcoat", "wool", "winter", "formal", "luxury"],
        createdAt: new Date("2019-11-01"),
        updatedAt: new Date("2024-01-15")
    },
    {
        id: 7,
        name: "Limited Edition Tuxedo",
        description: "Exclusive black tuxedo crafted from the finest Italian silk and wool blend. Features satin lapels, jetted pockets, and a single-button closure. Limited to only 50 pieces worldwide.",
        price: 2499.99,
        originalPrice: 3499.99,
        images: [
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
        ],
        category: "Suits",
        subcategory: "Tuxedos",
        brand: "Royal Tailors",
        rating: 5.0,
        reviewCount: 12,
        inStock: true,
        stockCount: 8,
        features: [
            "Italian silk and wool blend",
            "Satin lapels",
            "Jetted pockets",
            "Single-button closure",
            "Limited edition numbering"
        ],
        specifications: {
            "Material": "70% Silk, 30% Wool",
            "Fit": "Slim",
            "Style": "Single-button",
            "Lapels": "Satin",
            "Edition": "Limited to 50"
        },
        tags: ["tuxedo", "limited edition", "luxury", "formal", "exclusive"],
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-15")
    },
    {
        id: 8,
        name: "Vintage Rolex Submariner",
        description: "Authentic vintage Rolex Submariner from 1965, featuring the iconic black dial and stainless steel bracelet. This timepiece has been professionally restored and authenticated by Rolex experts.",
        price: 15999.99,
        originalPrice: 18999.99,
        images: [
            "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=600&fit=crop"
        ],
        category: "Accessories",
        subcategory: "Watches",
        brand: "Rolex",
        rating: 5.0,
        reviewCount: 3,
        inStock: true,
        stockCount: 1,
        features: [
            "1965 vintage model",
            "Black dial",
            "Stainless steel bracelet",
            "Professional restoration",
            "Rolex authentication"
        ],
        specifications: {
            "Model": "Submariner 5513",
            "Year": "1965",
            "Material": "Stainless Steel",
            "Movement": "Automatic",
            "Water Resistance": "100m"
        },
        tags: ["rolex", "vintage", "submariner", "luxury", "investment"],
        createdAt: new Date("2023-12-01"),
        updatedAt: new Date("2024-01-15")
    },
    {
        id: 9,
        name: "Artisan Leather Briefcase",
        description: "Handcrafted leather briefcase made from full-grain Italian leather. Features brass hardware, multiple compartments, and a detachable shoulder strap. Each piece is individually numbered and signed by the artisan.",
        price: 899.99,
        originalPrice: 1199.99,
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=600&fit=crop"
        ],
        category: "Accessories",
        subcategory: "Bags",
        brand: "Artisan Leather Co.",
        rating: 4.9,
        reviewCount: 67,
        inStock: true,
        stockCount: 15,
        features: [
            "Full-grain Italian leather",
            "Brass hardware",
            "Multiple compartments",
            "Detachable shoulder strap",
            "Handcrafted and numbered"
        ],
        specifications: {
            "Material": "Full-grain Italian Leather",
            "Hardware": "Solid Brass",
            "Dimensions": "16\" x 12\" x 4\"",
            "Weight": "2.5 lbs",
            "Care": "Leather conditioner"
        },
        tags: ["briefcase", "leather", "artisan", "luxury", "handcrafted"],
        createdAt: new Date("2023-06-15"),
        updatedAt: new Date("2024-01-15")
    },
    {
        id: 10,
        name: "Cashmere Travel Scarf",
        description: "Ultra-soft cashmere travel scarf in a sophisticated camel color. Made from 100% Mongolian cashmere, this scarf provides exceptional warmth and luxury. Perfect for travel and everyday wear.",
        price: 199.99,
        originalPrice: 299.99,
        images: [
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop",
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=600&fit=crop"
        ],
        category: "Accessories",
        subcategory: "Scarves",
        brand: "Mongolian Cashmere",
        rating: 4.8,
        reviewCount: 89,
        inStock: true,
        stockCount: 34,
        features: [
            "100% Mongolian cashmere",
            "Camel color",
            "Travel size",
            "Ultra-soft texture",
            "Lightweight and warm"
        ],
        specifications: {
            "Material": "100% Mongolian Cashmere",
            "Dimensions": "12\" x 60\"",
            "Weight": "80g",
            "Care": "Dry clean only",
            "Origin": "Mongolia"
        },
        tags: ["scarf", "cashmere", "travel", "luxury", "winter"],
        createdAt: new Date("2023-09-01"),
        updatedAt: new Date("2024-01-15")
    }
];

export const categories = [
    {
        id: "suits",
        name: "Suits",
        description: "Timeless business and formal suits",
        image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&h=300&fit=crop",
        productCount: 2,
        subcategories: ["Business Suits", "Tuxedos", "Three-Piece Suits", "Wedding Suits", "Casual Suits"]
    },
    {
        id: "outerwear",
        name: "Outerwear",
        description: "Premium jackets and coats",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
        productCount: 2,
        subcategories: ["Jackets", "Overcoats", "Blazers", "Trench Coats", "Peacoats"]
    },
    {
        id: "shirts",
        name: "Shirts",
        description: "Classic and contemporary shirts",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=300&fit=crop",
        productCount: 1,
        subcategories: ["Oxford Shirts", "Dress Shirts", "Casual Shirts", "Polo Shirts", "Henley Shirts"]
    },
    {
        id: "sweaters",
        name: "Sweaters",
        description: "Luxurious knitwear for all seasons",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=300&fit=crop",
        productCount: 1,
        subcategories: ["Turtlenecks", "Cardigans", "Pullovers", "V-Necks", "Crew Necks"]
    },
    {
        id: "accessories",
        name: "Accessories",
        description: "Premium accessories and luxury items",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
        productCount: 4,
        subcategories: ["Watches", "Bags", "Pocket Squares", "Scarves", "Belts", "Ties"]
    }
];