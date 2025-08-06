import Link from "next/link";
import { products } from "./data/products";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to My E-commerce Store</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="border p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="font-bold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
