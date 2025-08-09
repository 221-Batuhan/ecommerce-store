"use client";

import { useCart } from "../../context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Crown, Sparkles, Gift } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartItemCount } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-old-money-500 to-old-money-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Crown className="w-8 h-8 text-gold-500" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-old-money-900 mb-3">Your Cart is Empty</h1>
          <p className="text-xl text-old-money-600 mb-8 max-w-md mx-auto leading-relaxed">
            Looks like you haven't added any items to your cart yet. Start building your premium collection today.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-old-money-500 to-old-money-600 text-white px-8 py-4 rounded-xl hover:from-old-money-600 hover:to-old-money-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-xl"
          >
            Continue Shopping
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-old-money-500 to-old-money-600 rounded-2xl flex items-center justify-center">
              <ShoppingBag className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-old-money-900">Shopping Cart</h1>
              <div className="flex items-center gap-3 text-lg text-old-money-600">
                <span className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-gold-500" />
                  {getCartItemCount()} premium item{getCartItemCount() !== 1 ? 's' : ''}
                </span>
                <span className="w-2 h-2 bg-old-money-300 rounded-full"></span>
                <span className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold-400" />
                  Luxury Collection
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-cream-200 overflow-hidden">
              {cart.map((item) => (
                <div key={item.id} className="p-6 border-b border-cream-200 last:border-b-0 hover:bg-cream-50/50 transition-colors">
                  <div className="flex items-center gap-6">
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gradient-to-br from-cream-50 to-cream-100 rounded-xl overflow-hidden flex-shrink-0 border border-cream-200">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-old-money-900 mb-2 text-lg line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-old-money-600 mb-3 font-medium">{item.brand}</p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-cream-300 rounded-xl bg-cream-50">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-old-money-100 transition-colors rounded-l-xl"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4 text-old-money-600" />
                          </button>
                          <span className="px-4 py-2 text-old-money-900 font-semibold min-w-[3rem] text-center bg-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-old-money-100 transition-colors rounded-r-xl"
                          >
                            <Plus className="w-4 h-4 text-old-money-600" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 transition-colors p-2 hover:bg-red-50 rounded-lg"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-2xl font-bold text-old-money-900 mb-1">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-old-money-600 font-medium">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Actions */}
            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={clearCart}
                className="text-old-money-600 hover:text-old-money-800 transition-colors font-medium hover:bg-old-money-50 px-4 py-2 rounded-lg"
              >
                Clear Cart
              </button>
              <Link
                href="/"
                className="text-old-money-600 hover:text-old-money-800 transition-colors font-medium hover:bg-old-money-50 px-4 py-2 rounded-lg"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-cream-200 p-8 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl flex items-center justify-center">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-old-money-900">Order Summary</h2>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-old-money-600">
                  <span>Subtotal ({getCartItemCount()} items)</span>
                  <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-old-money-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Free
                  </span>
                </div>
                <div className="flex justify-between text-old-money-600">
                  <span>Tax</span>
                  <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-cream-200 pt-4">
                  <div className="flex justify-between text-xl font-bold text-old-money-900">
                    <span>Total</span>
                    <span>${(getCartTotal() * 1.08).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-old-money-500 to-old-money-600 text-white py-4 px-6 rounded-xl hover:from-old-money-600 hover:to-old-money-700 transition-all duration-200 font-semibold text-lg transform hover:-translate-y-0.5 shadow-xl">
                Proceed to Checkout
              </button>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-cream-50 rounded-xl border border-cream-200">
                <div className="flex items-center gap-2 text-old-money-700 mb-2">
                  <Crown className="w-4 h-4 text-gold-500" />
                  <span className="font-medium">Premium Benefits</span>
                </div>
                <ul className="text-sm text-old-money-600 space-y-1">
                  <li>• Free express shipping</li>
                  <li>• 30-day return policy</li>
                  <li>• Premium customer support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
