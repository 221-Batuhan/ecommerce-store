"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Store<span className="text-red-500">Logo</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-red-400 transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-red-400 transition-colors">
            Products
          </Link>
          <Link href="/about" className="hover:text-red-400 transition-colors">
            About
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1.5 py-0.5 text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
