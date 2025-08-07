"use client";

import { Product } from "../types/Product"; // relative import
import { useCart } from "../context/CartContext"; // relative import

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <img src={product.image} alt={product.title} className="mb-4" />
      <p className="mb-2">{product.description}</p>
      <p className="text-xl font-bold mb-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </main>
  );
}
