"use client";

import { ThumbsUp, ThumbsDown, Share2, Download, MoreHorizontal } from "lucide-react";
import Image from "next/image";

interface VideoPlayerProps {
  video: {
    title: string;
    channel: string;
    channelAvatar: string;
    subscribers: string;
    views: string;
    uploadDate: string;
    likes: string;
    description: string;
  };
}

export default function VideoPlayer({ video }: VideoPlayerProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Video Player Placeholder */}
      <div className="w-full aspect-video bg-black rounded-xl overflow-hidden">
        <div className="w-full h-full flex items-center justify-center text-white text-xl">
          Video Player Area
        </div>
      </div>

      {/* Video Title */}
      <h1 className="text-xl font-bold">{video.title}</h1>

      {/* Channel Info and Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Channel Info */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src={video.channelAvatar}
              alt={video.channel}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold">{video.channel}</h3>
            <p className="text-sm text-gray-600">{video.subscribers} subscribers</p>
          </div>
          <button className="ml-4 px-4 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
            Subscribe
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-gray-100 rounded-full overflow-hidden">
            <button className="px-4 py-2 hover:bg-gray-200 transition-colors flex items-center gap-2 border-r border-gray-300">
              <ThumbsUp className="w-5 h-5" />
              <span className="font-medium">{video.likes}</span>
            </button>
            <button className="px-4 py-2 hover:bg-gray-200 transition-colors">
              <ThumbsDown className="w-5 h-5" />
            </button>
          </div>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            <span className="font-medium">Share</span>
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
            <Download className="w-5 h-5" />
            <span className="font-medium">Download</span>
          </button>
          <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Video Stats and Description */}
      <div className="bg-gray-100 rounded-xl p-4">
        <div className="flex gap-2 text-sm font-semibold mb-2">
          <span>{video.views} views</span>
          <span>{video.uploadDate}</span>
        </div>
        <p className="text-sm whitespace-pre-wrap">{video.description}</p>
      </div>
    </div>
  );
}
