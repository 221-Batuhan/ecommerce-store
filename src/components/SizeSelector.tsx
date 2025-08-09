"use client";

import { useState } from "react";
import { Ruler } from "lucide-react";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize?: string;
  onSizeSelect: (size: string) => void;
  showSizeGuide?: boolean;
}

export default function SizeSelector({ 
  sizes, 
  selectedSize, 
  onSizeSelect, 
  showSizeGuide = true 
}: SizeSelectorProps) {
  const [showGuide, setShowGuide] = useState(false);

  const sizeGuide = {
    "XS": "32-34",
    "S": "34-36", 
    "M": "36-38",
    "L": "38-40",
    "XL": "40-42",
    "XXL": "42-44",
    "2XL": "44-46",
    "3XL": "46-48"
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-gray-900">Select Size</h3>
        {showSizeGuide && (
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <Ruler className="w-4 h-4" />
            Size Guide
          </button>
        )}
      </div>

      {/* Size Options */}
      <div className="grid grid-cols-4 gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeSelect(size)}
            className={`py-2 px-3 text-sm font-medium rounded-lg border transition-colors ${
              selectedSize === size
                ? "border-blue-600 bg-blue-50 text-blue-600"
                : "border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Size Guide */}
      {showGuide && showSizeGuide && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-3">Size Chart</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {Object.entries(sizeGuide).map(([size, range]) => (
              <div key={size} className="flex justify-between">
                <span className="font-medium">{size}</span>
                <span className="text-gray-600">{range}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Measurements are in inches. For best fit, measure your chest/bust circumference.
          </p>
        </div>
      )}

      {/* Size Selection Help */}
      {!selectedSize && (
        <p className="text-sm text-gray-500">
          Please select a size to add this item to your cart.
        </p>
      )}
    </div>
  );
}
