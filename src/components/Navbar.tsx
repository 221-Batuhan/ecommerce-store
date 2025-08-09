"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Search, User, Heart, Menu, Download, Truck, RefreshCw, HelpCircle, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const { cart } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cartCount = isMounted ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navigationItems = [
    { name: "Suits", href: "/category/suits" },
    { name: "Outerwear", href: "/category/outerwear" },
    { name: "Shirts", href: "/category/shirts" },
    { name: "Sweaters", href: "/category/sweaters" },
    { name: "Sale", href: "/sale" },
    { name: "New Arrivals", href: "/new" },
  ];

  return (
    <nav className="bg-white shadow-xl border-b-2 border-gray-300 sticky top-0 z-50">
      {/* Enhanced Top Bar */}
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-3 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 font-bold text-gray-200 hover:text-white transition-colors cursor-pointer">
                <Download className="w-4 h-4" />
                📱 Download our mobile app
              </span>
              <span className="flex items-center gap-2 font-bold text-gray-200 hover:text-white transition-colors">
                <Truck className="w-4 h-4" />
                🚚 Free shipping on orders over $75
              </span>
              <span className="flex items-center gap-2 font-bold text-gray-200 hover:text-white transition-colors">
                <RefreshCw className="w-4 h-4" />
                ✨ 30-day return policy
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/help" className="flex items-center gap-2 hover:text-white transition-colors font-medium hover:scale-105 transform text-gray-300">
                <HelpCircle className="w-4 h-4" />
                Help
              </Link>
              <Link href="/contact" className="flex items-center gap-2 hover:text-white transition-colors font-medium hover:scale-105 transform text-gray-300">
                <Phone className="w-4 h-4" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          {/* Enhanced Logo */}
          <Link href="/" className="text-3xl font-bold text-black hover:text-gray-700 transition-colors transform hover:scale-105">
            A<span className="text-gray-600">Clothing</span>
          </Link>

          {/* Enhanced Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 pr-24 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 placeholder-gray-500 bg-white shadow-md hover:shadow-lg transition-all duration-200"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-black text-white px-4 py-1.5 rounded-lg transition-all duration-200 text-sm font-bold shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* Enhanced Right Side Actions */}
          <div className="flex items-center gap-5">
            {/* Enhanced User Account */}
            <Link href="/account" className="hidden md:flex items-center gap-2 text-gray-800 hover:text-black transition-all duration-200 font-semibold hover:scale-105 transform group">
              <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-200">
                <User className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold">Account</span>
            </Link>

            {/* Enhanced Wishlist */}
            <Link href="/wishlist" className="hidden md:flex items-center gap-2 text-gray-800 hover:text-black transition-all duration-200 font-semibold hover:scale-105 transform group">
              <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-200">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-sm font-bold">Wishlist</span>
            </Link>

            {/* Enhanced Cart */}
            <div className="relative group">
              <Link href="/cart" className="relative flex items-center gap-2 text-gray-800 hover:text-black transition-all duration-200 font-semibold hover:scale-105 transform">
                <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-200">
                  <ShoppingCart className="w-6 h-6" />
                </div>
                <span className="hidden md:block text-sm font-bold">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs rounded-full px-2 py-1 font-bold shadow-lg animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              {/* Enhanced Cart Dropdown Preview */}
              {cartCount > 0 && (
                <div className="absolute right-0 top-full mt-3 w-80 bg-white rounded-xl shadow-2xl border-2 border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-5">
                    <h3 className="font-bold text-black mb-4 text-lg border-b-2 border-gray-200 pb-2">Cart Preview</h3>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {cart.slice(0, 3).map((item) => (
                        <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                            <img
                              src={item.images[0]}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-black line-clamp-1">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-700">
                              Qty: {item.quantity} × ${item.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                      {cart.length > 3 && (
                        <p className="text-sm text-gray-600 text-center font-medium">
                          +{cart.length - 3} more items
                        </p>
                      )}
                    </div>
                    <div className="border-t-2 border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-black text-lg">Total:</span>
                        <span className="font-bold text-black text-xl">
                          ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                        </span>
                      </div>
                      <Link
                        href="/cart"
                        className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white py-3 px-4 rounded-xl hover:from-gray-800 hover:to-black transition-all duration-200 text-sm font-bold text-center block shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        View Cart
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-800 hover:text-black transition-colors bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg hover:from-gray-200 hover:to-gray-300"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Search Bar */}
        <div className="md:hidden pb-5">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 pr-24 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 placeholder-gray-500 bg-white shadow-md hover:shadow-lg transition-all duration-200"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-black text-white px-4 py-1.5 rounded-lg transition-all duration-200 text-sm font-bold shadow-md hover:shadow-lg"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {/* Enhanced Navigation Menu */}
        <div className="hidden md:flex items-center justify-center py-4 border-t-2 border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 rounded-b-xl">
          <div className="flex items-center gap-10">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:text-gray-700 transition-all duration-200 font-bold text-base relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-700 to-black group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-5 border-t-2 border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 rounded-b-xl">
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-black hover:text-gray-700 transition-colors font-bold text-lg p-2 rounded-lg hover:bg-white/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t-2 border-gray-200">
                <Link
                  href="/account"
                  className="flex items-center gap-3 text-black hover:text-gray-700 transition-colors font-bold text-lg p-2 rounded-lg hover:bg-white/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
                    <User className="w-5 h-5" />
                  </div>
                  Account
                </Link>
                <Link
                  href="/wishlist"
                  className="flex items-center gap-3 text-black hover:text-gray-700 transition-colors font-bold text-lg p-2 rounded-lg hover:bg-white/50 mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
                    <Heart className="w-5 h-5" />
                  </div>
                  Wishlist
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
