"use client";

import { Product } from "../types/Product";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { Star, Heart, ShoppingCart, Eye, Minus, Plus, Crown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  showQuickActions?: boolean;
}

export default function ProductCard({ product, showQuickActions = true }: ProductCardProps) {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, quantity);
    showToast(`${quantity} ${quantity === 1 ? 'item' : 'items'} added to cart!`, "success");
    setQuantity(1);
    setShowQuantitySelector(false);
  };

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    showToast("Item added to cart!", "success");
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    showToast(
      isFavorite ? "Removed from favorites" : "Added to favorites", 
      isFavorite ? "info" : "success"
    );
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 fill-gold-500 text-gold-500" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-cream-300" />
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

  // Determine if product is premium (price > $500)
  const isPremium = product.price > 500;

  return (
    <div
      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-cream-200 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium Badge */}
      {isPremium && (
        <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-gold-400 to-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <Crown className="w-3 h-3" />
          Premium
        </div>
      )}

      <Link href={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-cream-50">
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-old-money-500 to-old-money-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              -{discountPercentage}%
            </div>
          )}

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute top-3 right-3 bg-navy-800 text-white text-xs px-3 py-1 rounded-full shadow-lg">
              Out of Stock
            </div>
          )}

          {/* Quick Actions */}
          {showQuickActions && (
            <div className={`absolute right-3 top-16 flex flex-col gap-3 transition-all duration-500 ${
              isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
            }`}>
              <button 
                onClick={handleFavorite}
                className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                  isFavorite 
                    ? 'bg-red-500 text-white hover:bg-red-600' 
                    : 'bg-white text-gray-600 hover:bg-cream-100'
                }`}
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
              <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:bg-cream-100 transition-colors">
                <Eye className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Image Navigation Dots */}
          {product.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white shadow-lg scale-125' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
        </div>

        {/* Product Info */}
        <div className="p-5">
          {/* Brand */}
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-old-money-600 uppercase tracking-wide">
              {product.brand}
            </p>
            {isPremium && (
              <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
            )}
          </div>
          
          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-old-money-600 transition-colors duration-300 leading-tight">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {renderStars(product.rating)}
            </div>
            <span className="text-sm text-gray-500">({product.reviewCount})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Features Preview */}
          {product.features.length > 0 && (
            <div className="mb-4">
              <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                {product.features.slice(0, 2).join(' • ')}
              </p>
            </div>
          )}

          {/* Quick Add to Cart */}
          {showQuickActions && product.inStock && (
            <div className="space-y-3">
              {showQuantitySelector ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-cream-300 rounded-lg bg-cream-50">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setQuantity(Math.max(1, quantity - 1));
                      }}
                      className="p-2 hover:bg-cream-100 transition-colors rounded-l-lg"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4 text-gray-600" />
                    </button>
                    <span className="px-4 py-2 text-gray-900 font-medium min-w-[3rem] text-center bg-white">
                      {quantity}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setQuantity(quantity + 1);
                      }}
                      className="p-2 hover:bg-cream-100 transition-colors rounded-r-lg"
                    >
                      <Plus className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-gradient-to-r from-old-money-500 to-old-money-600 text-white py-3 px-4 rounded-lg hover:from-old-money-600 hover:to-old-money-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              ) : (
                <div className="flex gap-3">
                  <button
                    onClick={handleQuickAdd}
                    className="flex-1 bg-gradient-to-r from-old-money-500 to-old-money-600 text-white py-3 px-4 rounded-lg hover:from-old-money-600 hover:to-old-money-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Quick Add
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setShowQuantitySelector(true);
                    }}
                    className="px-4 py-3 border border-cream-300 text-gray-700 rounded-lg hover:bg-cream-50 transition-colors bg-white hover:border-old-money-300"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Out of Stock Message */}
          {!product.inStock && (
            <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg text-center">
              <p className="text-sm text-gray-600">Currently out of stock</p>
              <p className="text-xs text-gray-500 mt-1">We'll notify you when it's back</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
