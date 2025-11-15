"use client";

import { MoreVertical } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface VideoCardProps {
  video: {
    id: string;
    thumbnail: string;
    title: string;
    channel: string;
    channelAvatar: string;
    views: string;
    timestamp: string;
    duration: string;
  };
}

export default function VideoCard({ video }: VideoCardProps) {
  return (
    <div className="flex flex-col gap-3 cursor-pointer group">
      {/* Thumbnail - Wrapped in Link */}
      <Link href={`/video/${video.id}`}>
        <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Duration Badge */}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
            {video.duration}
          </div>
        </div>
      </Link>

      {/* Video Info */}
      <div className="flex gap-3">
        {/* Channel Avatar */}
        <div className="relative w-9 h-9 flex-shrink-0">
          <Image
            src={video.channelAvatar}
            alt={video.channel}
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* Video Details */}
        <div className="flex-1 min-w-0">
          <Link href={`/video/${video.id}`}>
            <h3 className="font-semibold text-sm line-clamp-2 mb-1 group-hover:text-blue-600">
              {video.title}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 hover:text-gray-900">
            {video.channel}
          </p>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span>{video.views} views</span>
            <span>•</span>
            <span>{video.timestamp}</span>
          </div>
        </div>

        {/* More Options */}
        <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded-full h-fit">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
