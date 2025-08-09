"use client";

import { useState } from "react";
import { Search, ShoppingBag, Truck, Shield, RotateCcw, Crown, Sparkles, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Shipping",
      description: "On orders over $75"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Premium Quality",
      description: "100% authentic materials"
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Easy Returns",
      description: "30 day return policy"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-old-money-700 via-old-money-800 to-old-money-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating luxury elements */}
      <div className="absolute top-20 left-20 opacity-20">
        <Crown className="w-16 h-16 text-gold-400 animate-pulse" />
      </div>
      <div className="absolute top-40 right-32 opacity-20">
        <Sparkles className="w-12 h-12 text-gold-300 animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-gradient-to-r from-white to-gold-300"></div>
                <span className="text-white font-semibold tracking-wide uppercase text-lg">Luxury Fashion</span>
                <div className="w-12 h-1 bg-gradient-to-r from-gold-300 to-white"></div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Elevate Your
                <span className="block bg-gradient-to-r from-white via-gold-200 to-gold-400 bg-clip-text text-transparent">
                  Style
                </span>
              </h1>
              <p className="text-xl text-white max-w-xl leading-relaxed">
                Discover timeless elegance and sophisticated fashion. From classic suits to 
                premium outerwear, express your refined taste with luxury clothing that speaks 
                of quality and distinction.
              </p>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative max-w-lg">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-5 pl-14 pr-36 text-old-money-900 bg-white rounded-2xl shadow-2xl focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 focus:ring-offset-old-money-700 text-lg"
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-old-money-600" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-old-money-900 px-8 py-3 rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/30 group-hover:bg-gold-400/30 group-hover:border-gold-300/60 transition-all duration-300">
                    <div className="text-white group-hover:text-gold-200 transition-colors">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm mb-1 text-white">{feature.title}</h3>
                  <p className="text-xs text-gold-100">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-md rounded-3xl p-10 border border-white/40 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-gold-400 to-gold-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <ShoppingBag className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">New</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold mb-2 text-white">Spring Collection!</h3>
                    <p className="text-gold-100 text-lg mb-4">New arrivals with up to 50% off</p>
                    <div className="bg-gradient-to-r from-white to-gold-100 text-old-money-900 px-6 py-3 rounded-full font-bold text-lg inline-flex items-center gap-2 hover:from-gold-100 hover:to-white transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Shop Now
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full opacity-20 animate-pulse blur-sm" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-cream-300 to-cream-400 rounded-full opacity-20 animate-pulse delay-1000 blur-sm" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-auto">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-31.49,206.8-19.38,73.84,13.19,138.54,57.38,218.2,57.38,69.27,0,135.13-34.83,202.29-42.91,62.65-7.58,126.11-2.87,185.32,8.21C968.26,95.83,1143.59,51.63,1200,0V120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
