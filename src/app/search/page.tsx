"use client";

import { useSearchParams } from "next/navigation";
import { products } from "../data/products";
import ProductCard from "../../components/ProductCard";
import { Search, Filter, Sparkles, Crown } from "lucide-react";
import { useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [sortBy, setSortBy] = useState("relevance");
  const [priceRange, setPriceRange] = useState("all");

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.brand.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) ||
    product.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      default:
        return 0;
    }
  });

  // Filter by price range
  const priceFilteredProducts = sortedProducts.filter((product) => {
    switch (priceRange) {
      case "under-25":
        return product.price < 25;
      case "25-50":
        return product.price >= 25 && product.price < 50;
      case "50-100":
        return product.price >= 50 && product.price < 100;
      case "over-100":
        return product.price >= 100;
      default:
        return true;
    }
  });

  if (!query) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-6">
            <Search className="w-20 h-20 text-old-money-400 mx-auto" />
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-8 h-8 text-gold-500 animate-pulse" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-old-money-900 mb-3">Search for Products</h1>
          <p className="text-xl text-old-money-600 max-w-md mx-auto leading-relaxed">
            Enter a search term to find what you're looking for in our premium collection.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Header */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-old-money-500 to-old-money-600 rounded-2xl flex items-center justify-center">
              <Search className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-old-money-900 mb-2">
                Search Results for "{query}"
              </h1>
              <div className="flex items-center justify-center gap-4 text-lg text-old-money-600">
                <span className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-gold-500" />
                  Found {priceFilteredProducts.length} product{priceFilteredProducts.length !== 1 ? 's' : ''}
                </span>
                {priceFilteredProducts.length > 0 && (
                  <span className="w-2 h-2 bg-old-money-300 rounded-full"></span>
                )}
                {priceFilteredProducts.length > 0 && (
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-gold-400" />
                    Premium Selection
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-cream-200 p-6 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-old-money-500 to-old-money-600 rounded-xl flex items-center justify-center">
                  <Filter className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-old-money-900">Filters</h2>
              </div>

              {/* Sort By */}
              <div className="mb-8">
                <h3 className="font-semibold text-old-money-800 mb-4 text-lg">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-old-money-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-200 hover:border-old-money-300"
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-semibold text-old-money-800 mb-4 text-lg">Price Range</h3>
                <div className="space-y-3">
                  {[
                    { value: "all", label: "All Prices", icon: "💎" },
                    { value: "under-25", label: "Under $25", icon: "✨" },
                    { value: "25-50", label: "$25 - $50", icon: "🌟" },
                    { value: "50-100", label: "$50 - $100", icon: "💫" },
                    { value: "over-100", label: "Over $100", icon: "👑" },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream-50 transition-colors cursor-pointer group">
                      <input
                        type="radio"
                        name="priceRange"
                        value={option.value}
                        checked={priceRange === option.value}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="text-old-money-600 focus:ring-old-money-500 w-4 h-4"
                      />
                      <span className="text-lg">{option.icon}</span>
                      <span className="text-old-money-700 group-hover:text-old-money-900 font-medium">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-semibold text-old-money-800 mb-4 text-lg">Categories</h3>
                <div className="space-y-3">
                  {Array.from(new Set(filteredProducts.map(p => p.category))).map((category) => (
                    <label key={category} className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream-50 transition-colors cursor-pointer group">
                      <input
                        type="checkbox"
                        className="text-old-money-600 focus:ring-old-money-500 rounded w-4 h-4"
                      />
                      <span className="text-old-money-700 group-hover:text-old-money-900 font-medium capitalize">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {priceFilteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="relative mb-6">
                  <Search className="w-20 h-20 text-old-money-300 mx-auto" />
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-8 h-8 text-gold-400" />
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-old-money-800 mb-3">No products found</h2>
                <p className="text-lg text-old-money-600 max-w-md mx-auto leading-relaxed">
                  Try adjusting your search terms or filters to find what you're looking for in our premium collection.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {priceFilteredProducts.map((product) => (
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
