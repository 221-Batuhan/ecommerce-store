"use client";

import { products, categories } from "./data/products";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import HeroSection from "../components/HeroSection";
import { Star, TrendingUp, Clock, Zap, Eye, Crown, Sparkles, Award } from "lucide-react";

export default function Home() {
  // Get featured products (top rated and discounted)
  const featuredProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  // Get products with discounts
  const discountedProducts = products
    .filter(p => p.originalPrice && p.originalPrice > p.price)
    .sort((a, b) => {
      const aDiscount = ((a.originalPrice! - a.price) / a.originalPrice!) * 100;
      const bDiscount = ((b.originalPrice! - b.price) / b.originalPrice!) * 100;
      return bDiscount - aDiscount;
    })
    .slice(0, 4);

  // Get premium products (price > $500)
  const premiumProducts = products
    .filter(p => p.price > 500)
    .sort((a, b) => b.price - a.price)
    .slice(0, 4);

  // Get new arrivals (most recent)
  const newArrivals = products
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-1 h-8 bg-gradient-to-b from-old-money-400 to-old-money-600"></div>
              <h2 className="text-4xl font-bold text-navy-900">
                Curated Collections
              </h2>
              <div className="w-1 h-8 bg-gradient-to-b from-old-money-400 to-old-money-600"></div>
            </div>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
              Explore our meticulously curated collections for every style and occasion. 
              From timeless classics to contemporary luxury, discover pieces that define sophistication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Collection Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Crown className="w-8 h-8 text-gold-500" />
              <h2 className="text-4xl font-bold text-navy-900">
                Premium Collection
              </h2>
              <Crown className="w-8 h-8 text-gold-500" />
            </div>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
              Discover our most exclusive pieces, crafted with the finest materials and 
              attention to detail. These premium items represent the pinnacle of luxury fashion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-old-money-500" />
                <h2 className="text-4xl font-bold text-navy-900">
                  Trending Styles
                </h2>
              </div>
              <p className="text-xl text-navy-600 max-w-2xl">
                Our most popular and highly-rated fashion pieces, loved by discerning customers worldwide
              </p>
            </div>
            <div className="flex items-center gap-3 text-old-money-600 font-medium bg-cream-100 px-6 py-3 rounded-full">
              <Sparkles className="w-5 h-5" />
              <span>Trending Now</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Sale Section */}
      <section className="py-20 bg-gradient-to-br from-old-money-600 via-old-money-700 to-old-money-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 text-white border border-white/20">
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-gold-400 to-gold-500 p-3 rounded-full">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-gold-300 to-gold-400 text-old-money-800 px-6 py-2 rounded-full">
                    SEASONAL SALE
                  </span>
                </div>
                <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gold-100 bg-clip-text text-transparent">
                  Up to 60% Off
                </h2>
                <p className="text-old-money-100 text-xl leading-relaxed">
                  Spring collection clearance - limited time only. Don't miss these exceptional deals on premium fashion.
                </p>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-bold mb-2 text-gold-300">24:59:59</div>
                <div className="text-lg text-old-money-200">Time Remaining</div>
                <div className="text-sm text-old-money-300 mt-2">Limited Stock</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {discountedProducts.map((product) => (
                <div key={product.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold text-white mb-3 line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-gold-300 text-gold-300'
                              : 'text-white/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-old-money-200">
                      ({product.reviewCount})
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold text-gold-300">
                      ${product.price}
                    </span>
                    <span className="text-sm text-old-money-200 line-through">
                      ${product.originalPrice}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-old-money-500" />
                <h2 className="text-4xl font-bold text-navy-900">
                  New Arrivals
                </h2>
              </div>
              <p className="text-xl text-navy-600 max-w-2xl">
                Fresh styles just in - be the first to discover the latest trends and exclusive pieces
              </p>
            </div>
            <div className="flex items-center gap-3 text-old-money-600 font-medium bg-white px-6 py-3 rounded-full shadow-lg">
              <Eye className="w-5 h-5" />
              <span>Latest Styles</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Crown className="w-8 h-8 text-gold-400" />
              <h2 className="text-4xl font-bold">
                Join the Elite
              </h2>
              <Crown className="w-8 h-8 text-gold-400" />
            </div>
            <p className="text-navy-200 mb-10 text-xl leading-relaxed max-w-3xl mx-auto">
              Get exclusive access to new collections, VIP events, and member-only discounts. 
              Be the first to know about limited editions and special offers.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent flex-1 text-lg"
                />
                <button className="bg-gradient-to-r from-gold-400 to-gold-500 text-navy-900 hover:from-gold-500 hover:to-gold-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-navy-300 mt-4">
                By subscribing, you agree to our privacy policy and terms of service
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
