"use client";

import { useState } from "react";
import Navbar from "@/components/globals/navbar/Navbar";
import Sidebar from "@/components/globals/Sidebar";
import VideoPlayer from "@/components/VideoPlayer";

// Sample video data - in real app, this would come from API/database
const videoData = {
  title: "Building a Full Stack Application with Next.js 14 - Complete Tutorial",
  channel: "Code Master",
  channelAvatar: "https://picsum.photos/seed/avatar1/100/100",
  subscribers: "1.2M",
  views: "1.2M",
  uploadDate: "2 days ago",
  likes: "45K",
  description: `Learn how to build a complete full-stack application using Next.js 14, TypeScript, and modern web development practices.

In this comprehensive tutorial, we'll cover:
- Setting up Next.js 14 with App Router
- TypeScript integration and best practices
- Building responsive UI components
- State management strategies
- API routes and server actions
- Database integration
- Authentication and authorization
- Deployment to production

Perfect for developers looking to master modern web development!

🔗 Resources:
- GitHub Repository: github.com/example
- Documentation: nextjs.org

⏰ Timestamps:
0:00 - Introduction
2:15 - Project Setup
5:30 - Building Components
12:45 - API Integration
20:00 - Deployment

#NextJS #WebDevelopment #FullStack #TypeScript #React`,
};

export default function VideoPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main Layout */}
      <div className="flex pt-14">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} />

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? "ml-60" : "ml-20"
          }`}
        >
          <div className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Video Player Section */}
              <div className="lg:col-span-2">
                <VideoPlayer video={videoData} />
              </div>

              {/* Suggested Videos Section */}
              <div className="lg:col-span-1">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg mb-4">Suggested Videos</h3>
                  {/* Suggested videos would go here */}
                  <p className="text-gray-500 text-sm">Loading suggestions...</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
