"use client";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <p className="p-8 text-xl">Your cart is empty.</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="mb-4 border-b pb-4">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Price per item: ${item.price.toFixed(2)}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="mt-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
