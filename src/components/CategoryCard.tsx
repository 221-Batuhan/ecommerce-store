import { Category } from "../types/Product";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.id}`}>
      <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-cream-200 hover:border-old-money-300">
        {/* Category Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Sparkle effect for premium categories */}
          {category.productCount > 3 && (
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
              <div className="bg-gradient-to-r from-gold-400 to-gold-500 p-2 rounded-full shadow-lg">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
            </div>
          )}
        </div>

        {/* Category Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-gold-300 transition-colors duration-300">
            {category.name}
          </h3>
          <p className="text-sm text-gray-200 mb-4 line-clamp-2 leading-relaxed">
            {category.description}
          </p>
          
          {/* Product Count and Arrow */}
          <div className="flex items-center justify-between">
            <span className="text-sm bg-gradient-to-r from-old-money-500/80 to-old-money-600/80 backdrop-blur-sm px-4 py-2 rounded-full font-medium border border-white/20">
              {category.productCount} products
            </span>
            
            {/* Arrow */}
            <div className="w-10 h-10 bg-gradient-to-r from-old-money-500/80 to-old-money-600/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-gold-500 group-hover:scale-110 transition-all duration-300 border border-white/20">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        
        {/* Hover effect border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/50 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
      </div>
    </Link>
  );
}
