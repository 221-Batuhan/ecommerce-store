"use client";

import { products } from "../data/products";
import ProductCard from "../../components/ProductCard";
import { useState, useMemo } from "react";
import { Filter, SortAsc, SortDesc, Grid, List, Tag, Clock, TrendingUp, Crown, Sparkles, Zap } from "lucide-react";

export default function SalePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("discount");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 3000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Filter products that are on sale (have originalPrice > price)
  const saleProducts = products.filter(p => p.originalPrice && p.originalPrice > p.price);

  // Get unique categories and brands for sale items
  const categories = [...new Set(saleProducts.map(p => p.category))];
  const brands = [...new Set(saleProducts.map(p => p.brand))];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = saleProducts.filter(product => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Price filter
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      // Category filter
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      
      // Brand filter
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      
      return matchesSearch && matchesPrice && matchesCategory && matchesBrand;
    });

    // Sort products
    switch (sortBy) {
      case "discount":
        filtered.sort((a, b) => {
          const discountA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
          const discountB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
          return discountB - discountA;
        });
        break;
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      default:
        break;
    }

    return filtered;
  }, [saleProducts, searchQuery, sortBy, priceRange, selectedCategories, selectedBrands]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const getDiscountPercentage = (product: any) => {
    if (!product.originalPrice) return 0;
    return Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-3xl flex items-center justify-center">
              <Tag className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-old-money-900 mb-3">
                Sale & Clearance
              </h1>
              <div className="flex items-center justify-center gap-4 text-xl text-old-money-600 mb-4">
                <span className="flex items-center gap-2">
                  <Crown className="w-6 h-6 text-gold-500" />
                  Premium Collection
                </span>
                <span className="w-2 h-2 bg-old-money-300 rounded-full"></span>
                <span className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-gold-400" />
                  Luxury Items
                </span>
              </div>
              <p className="text-xl text-old-money-600 max-w-3xl mx-auto leading-relaxed">
                Discover amazing deals on premium clothing and accessories. 
                Limited time offers with up to 70% off retail prices.
              </p>
              <div className="flex items-center justify-center gap-8 mt-8 text-lg text-old-money-500">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-old-money-500 to-old-money-600 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium">Limited Time Only</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium">{filteredProducts.length} Items on Sale</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-cream-200 p-8 sticky top-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-old-money-500 to-old-money-600 rounded-xl flex items-center justify-center">
                  <Filter className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-old-money-900">Filters</h3>
              </div>

              {/* Search */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-old-money-800 mb-3">
                  Search Sale Items
                </label>
                <input
                  type="text"
                  placeholder="Search sale items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-old-money-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-200 hover:border-old-money-300"
                />
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-old-money-800 mb-3">
                  Price Range
                </label>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="3000"
                    step="50"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-old-money-500"
                  />
                  <div className="flex justify-between text-lg text-old-money-600 font-medium">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-old-money-800 mb-3">
                  Categories
                </label>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream-50 transition-colors cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="w-5 h-5 text-old-money-600 focus:ring-old-money-500 rounded border-cream-300"
                      />
                      <span className="text-old-money-700 group-hover:text-old-money-900 font-medium capitalize">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-old-money-800 mb-3">
                  Brands
                </label>
                <div className="space-y-3 max-h-48 overflow-y-auto">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream-50 transition-colors cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandToggle(brand)}
                        className="w-5 h-5 text-old-money-600 focus:ring-old-money-500 rounded border-cream-300"
                      />
                      <span className="text-old-money-700 group-hover:text-old-money-900 font-medium">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(searchQuery || selectedCategories.length > 0 || selectedBrands.length > 0 || priceRange[1] !== 3000) && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategories([]);
                    setSelectedBrands([]);
                    setPriceRange([0, 3000]);
                  }}
                  className="w-full text-lg text-old-money-600 hover:text-old-money-800 font-semibold hover:bg-old-money-50 px-4 py-3 rounded-xl transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-cream-200 p-6 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  {/* View Mode Toggle */}
                  <div className="flex items-center border-2 border-cream-300 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-3 transition-all duration-200 ${
                        viewMode === "grid" 
                          ? "bg-old-money-500 text-white" 
                          : "text-old-money-600 hover:text-old-money-800 hover:bg-cream-50"
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-3 transition-all duration-200 ${
                        viewMode === "list" 
                          ? "bg-old-money-500 text-white" 
                          : "text-old-money-600 hover:text-old-money-800 hover:bg-cream-50"
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Sort Dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 border-2 border-cream-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-old-money-500 focus:border-transparent bg-white/50 backdrop-blur-sm transition-all duration-200 hover:border-old-money-300"
                  >
                    <option value="discount">Biggest Discount</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>

                <div className="text-lg text-old-money-600 font-medium">
                  {filteredProducts.length} of {saleProducts.length} sale items
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className={`grid gap-8 ${
                viewMode === "grid" 
                  ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                  : "grid-cols-1"
              }`}>
                {filteredProducts.map((product) => (
                  <div key={product.id} className="relative group">
                    {/* Discount Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-lg font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                        <Zap className="w-5 h-5" />
                        -{getDiscountPercentage(product)}%
                      </div>
                    </div>
                    <ProductCard 
                      product={product}
                      showQuickActions={viewMode === "grid"}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-cream-200 p-16 text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-old-money-400 to-old-money-500 rounded-3xl flex items-center justify-center mx-auto">
                    <Tag className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-8 h-8 text-gold-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-old-money-800 mb-3">No sale items found</h3>
                <p className="text-lg text-old-money-600 mb-6 max-w-md mx-auto leading-relaxed">
                  Try adjusting your search or filter criteria to find amazing deals in our premium collection.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategories([]);
                    setSelectedBrands([]);
                    setPriceRange([0, 3000]);
                  }}
                  className="text-old-money-600 hover:text-old-money-800 font-semibold text-lg hover:bg-old-money-50 px-6 py-3 rounded-xl transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
