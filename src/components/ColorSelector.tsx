"use client";

interface ColorSelectorProps {
  colors: Array<{ name: string; hex: string; available: boolean }>;
  selectedColor?: string;
  onColorSelect: (color: string) => void;
}

export default function ColorSelector({ colors, selectedColor, onColorSelect }: ColorSelectorProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-medium text-gray-900">Select Color</h3>
      
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => onColorSelect(color.name)}
            disabled={!color.available}
            className={`relative w-10 h-10 rounded-full border-2 transition-all ${
              selectedColor === color.name
                ? "border-blue-600 ring-2 ring-blue-200"
                : "border-gray-300 hover:border-gray-400"
            } ${
              !color.available && "opacity-50 cursor-not-allowed"
            }`}
            style={{ backgroundColor: color.hex }}
            title={`${color.name}${!color.available ? ' - Out of Stock' : ''}`}
          >
            {selectedColor === color.name && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full border-2 border-blue-600" />
              </div>
            )}
            {!color.available && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Color Names */}
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <span
            key={color.name}
            className={`text-sm px-2 py-1 rounded ${
              selectedColor === color.name
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {color.name}
          </span>
        ))}
      </div>
    </div>
  );
}
