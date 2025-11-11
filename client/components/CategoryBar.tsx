"use client";

import { ChevronRight } from "lucide-react";

const categories = [
  "All",
  "Music",
  "Gaming",
  "News",
  "Live",
  "Sports",
  "Learning",
  "Fashion",
  "Entertainment",
  "Technology",
  "Cooking",
  "Travel",
  "Science",
  "Comedy",
];

export default function CategoryBar() {
  return (
    <div className="sticky top-14 z-30 bg-white border-b border-gray-200">
      <div className="flex items-center gap-3 px-4 py-3 overflow-x-auto scrollbar-hide">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap text-sm font-medium transition-colors flex-shrink-0 ${
              index === 0
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
        <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
