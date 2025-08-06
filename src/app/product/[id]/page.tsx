import { products } from "../../data/products";
import { notFound } from "next/navigation";

type Params = {
  params: {
    id: string;
  };
};

export default function ProductDetail({ params }: Params) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="mb-2">{product.description}</p>
      <p className="text-xl font-bold">${product.price}</p>
    </main>
  );
}
