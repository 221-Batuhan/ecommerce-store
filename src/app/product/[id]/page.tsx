import { products } from "../../data/products";
import { notFound } from "next/navigation";
import ProductDetailClient from "components/ProductDetailClient"; // relative import
import { Product } from "types/Product"; // relative import

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product as Product} />;
}
