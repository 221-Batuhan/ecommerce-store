export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    images: string[];
    category: string;
    subcategory?: string;
    brand: string;
    rating: number;
    reviewCount: number;
    inStock: boolean;
    stockCount: number;
    features: string[];
    specifications: Record<string, string>;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
};

export type Category = {
    id: string;
    name: string;
    description: string;
    image: string;
    productCount: number;
    subcategories?: string[];
};

export type Review = {
    id: number;
    productId: number;
    userId: string;
    userName: string;
    rating: number;
    title: string;
    comment: string;
    date: Date;
    helpful: number;
};