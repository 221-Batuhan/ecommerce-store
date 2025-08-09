"use client";

import { Product } from "../types/Product";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Star, Heart, Share2, Truck, Shield, RotateCcw, Check, Minus, Plus, Crown, Sparkles, Award, ShoppingBag } from "lucide-react";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelector";

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>();
  const [selectedColor, setSelectedColor] = useState<string>();
  const [activeTab, setActiveTab] = useState("description");
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    // For clothing items, require size selection
    if (product.category.toLowerCase().includes('clothing') || product.category.toLowerCase().includes('shirt') || 
        product.category.toLowerCase().includes('dress') || product.category.toLowerCase().includes('pants')) {
      if (!selectedSize) {
        alert('Please select a size before adding to cart');
        return;
      }
    }
    addToCart(product, quantity);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-5 h-5 fill-gold-500 text-gold-500" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-cream-300" />
      );
    }

    return stars;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const isPremium = product.price > 500;

  const tabs = [
    { id: "description", label: "Description" },
    { id: "features", label: "Features" },
    { id: "specifications", label: "Specifications" },
    { id: "reviews", label: `Reviews (${product.reviewCount})` },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-old-money-600 mb-10">
          <ol className="flex items-center space-x-3">
            <li><a href="/" className="hover:text-old-money-800 transition-colors">Home</a></li>
            <li className="text-old-money-400">/</li>
            <li><a href={`/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-old-money-800 transition-colors">{product.category}</a></li>
            <li className="text-old-money-400">/</li>
            <li className="text-old-money-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-2xl border-2 border-cream-200 overflow-hidden shadow-xl">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-5 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square bg-white rounded-xl border-2 overflow-hidden transition-all duration-200 hover:scale-105 ${
                      index === selectedImageIndex
                        ? 'border-old-money-500 shadow-lg'
                        : 'border-cream-200 hover:border-old-money-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-8">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="text-lg text-old-money-600 font-medium">{product.brand}</div>
              {isPremium && (
                <div className="flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  <Crown className="w-4 h-4" />
                  Premium
                </div>
              )}
            </div>

            {/* Product Name */}
            <h1 className="text-4xl font-bold text-old-money-900 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <span className="text-old-money-600 font-medium">{product.rating} out of 5</span>
              <span className="text-old-money-500">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-old-money-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-old-money-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-3 py-2 rounded-full">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </span>
                  </>
                )}
              </div>
              {discountPercentage > 0 && (
                <div className="text-green-600 font-semibold text-lg flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  {discountPercentage}% off
                </div>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-3">
              {product.inStock ? (
                <div className="flex items-center gap-3 text-green-600">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-semibold text-lg">In Stock</span>
                  {product.stockCount < 10 && (
                    <span className="text-sm text-orange-600 font-medium">
                      (Only {product.stockCount} left!)
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-3 text-red-600">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="font-semibold text-lg">Out of Stock</span>
                </div>
              )}
            </div>

            {/* Size Selector - Only for clothing items */}
            {(product.category.toLowerCase().includes('clothing') || product.category.toLowerCase().includes('shirt') || 
              product.category.toLowerCase().includes('dress') || product.category.toLowerCase().includes('pants')) && (
              <SizeSelector
                sizes={["XS", "S", "M", "L", "XL", "XXL"]}
                selectedSize={selectedSize}
                onSizeSelect={setSelectedSize}
              />
            )}

            {/* Color Selector - Only for clothing items */}
            {(product.category.toLowerCase().includes('clothing') || product.category.toLowerCase().includes('shirt') || 
              product.category.toLowerCase().includes('dress') || product.category.toLowerCase().includes('pants')) && (
              <ColorSelector
                colors={[
                  { name: "Black", hex: "#000000", available: true },
                  { name: "White", hex: "#FFFFFF", available: true },
                  { name: "Navy", hex: "#000080", available: true },
                  { name: "Gray", hex: "#808080", available: true },
                  { name: "Red", hex: "#FF0000", available: false }
                ]}
                selectedColor={selectedColor}
                onColorSelect={setSelectedColor}
              />
            )}

            {/* Quantity Selector */}
            <div className="flex items-center gap-6">
              <label className="font-semibold text-old-money-800 text-lg">Quantity:</label>
              <div className="flex items-center border-2 border-cream-300 rounded-xl bg-cream-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 hover:bg-old-money-100 transition-colors rounded-l-xl"
                >
                  <Minus className="w-5 h-5 text-old-money-600" />
                </button>
                <span className="px-6 py-3 border-x-2 border-cream-300 min-w-[4rem] text-center bg-white font-semibold text-old-money-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 hover:bg-old-money-100 transition-colors rounded-r-xl"
                >
                  <Plus className="w-5 h-5 text-old-money-600" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full bg-gradient-to-r from-old-money-500 to-old-money-600 text-white py-5 px-8 rounded-xl font-semibold text-lg hover:from-old-money-600 hover:to-old-money-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 transform hover:-translate-y-0.5 shadow-xl flex items-center justify-center gap-3"
              >
                <ShoppingBag className="w-6 h-6" />
                Add to Cart
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`flex items-center justify-center gap-3 py-4 px-6 border-2 rounded-xl transition-all duration-200 hover:scale-105 ${
                    isFavorite 
                      ? 'border-red-500 bg-red-50 text-red-600' 
                      : 'border-cream-300 hover:border-old-money-300 text-old-money-700 hover:text-old-money-800'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500' : ''}`} />
                  {isFavorite ? 'Added' : 'Add to Wishlist'}
                </button>
                <button className="flex items-center justify-center gap-3 py-4 px-6 border-2 border-cream-300 rounded-xl hover:border-old-money-300 text-old-money-700 hover:text-old-money-800 transition-all duration-200 hover:scale-105">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>

            {/* Features */}
            {product.features.length > 0 && (
              <div className="bg-gradient-to-r from-cream-50 to-cream-100 rounded-2xl p-6 border border-cream-200">
                <h3 className="font-semibold text-old-money-900 mb-4 text-lg flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold-500" />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-old-money-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Shipping Info */}
            <div className="border-2 border-cream-200 rounded-2xl p-6 bg-white/50 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-old-money-500 to-old-money-600 rounded-xl flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold text-old-money-900 text-lg">Shipping & Returns</span>
              </div>
              <div className="space-y-3 text-old-money-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-medium">Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-old-money-100 rounded-lg flex items-center justify-center">
                    <RotateCcw className="w-4 h-4 text-old-money-600" />
                  </div>
                  <span className="font-medium">30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-20">
          {/* Tab Navigation */}
          <div className="border-b-2 border-cream-200">
            <nav className="flex space-x-10">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-5 px-2 border-b-2 font-semibold text-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'border-old-money-500 text-old-money-600'
                      : 'border-transparent text-old-money-500 hover:text-old-money-700 hover:border-old-money-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="py-12">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <p className="text-old-money-700 leading-relaxed text-lg">{product.description}</p>
              </div>
            )}

            {activeTab === "features" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-old-money-900 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-gold-500" />
                  Product Features
                </h3>
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4 p-4 bg-cream-50 rounded-xl border border-cream-200">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-old-money-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-old-money-900 flex items-center gap-3">
                  <Award className="w-6 h-6 text-gold-500" />
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-4 border-b border-cream-200">
                      <span className="font-semibold text-old-money-700">{key}</span>
                      <span className="text-old-money-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-old-money-900 flex items-center gap-3">
                  <Star className="w-6 h-6 text-gold-500" />
                  Customer Reviews
                </h3>
                <div className="text-center py-16 bg-gradient-to-r from-cream-50 to-cream-100 rounded-2xl border border-cream-200">
                  <div className="w-20 h-20 bg-gradient-to-r from-old-money-500 to-old-money-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-old-money-800 mb-2">Reviews Coming Soon!</h4>
                  <p className="text-old-money-600 max-w-md mx-auto">
                    This would display customer reviews and ratings for an enhanced shopping experience.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
