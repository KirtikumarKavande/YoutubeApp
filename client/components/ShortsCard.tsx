"use client";

import { Play } from "lucide-react";
import Image from "next/image";

interface ShortsCardProps {
  short: {
    id: string;
    thumbnail: string;
    title: string;
    views: string;
  };
}

export default function ShortsCard({ short }: ShortsCardProps) {
  return (
    <div className="relative group cursor-pointer">
      {/* Thumbnail */}
      <div className="relative aspect-[9/16] bg-gray-200 rounded-xl overflow-hidden">
        <Image
          src={short.thumbnail}
          alt={short.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        {/* Views Badge */}
        <div className="absolute bottom-2 left-2 right-2">
          <p className="text-white text-sm font-semibold drop-shadow-lg line-clamp-2">
            {short.title}
          </p>
          <p className="text-white text-xs mt-1 drop-shadow-lg">
            {short.views} views
          </p>
        </div>
      </div>
    </div>
  );
}
