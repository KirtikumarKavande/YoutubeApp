"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import CategoryBar from "@/components/home/CategoryBar";
import VideoGrid from "@/components/VideoGrid";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
          {/* Category Bar */}
          <CategoryBar />

          {/* Video Grid */}
          <div className="p-6">
            <VideoGrid />
          </div>
        </main>
      </div>
    </div>
  );
}
