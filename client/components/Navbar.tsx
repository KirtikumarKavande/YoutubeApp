"use client";

import { Menu, Search, Video, Bell, User } from "lucide-react";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-14">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-1">
            <div className="w-9 h-6 bg-red-600 rounded-sm flex items-center justify-center">
              <Video className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-xl font-bold">YouTube</span>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex items-center">
            <div className="flex-1 flex items-center border border-gray-300 rounded-l-full overflow-hidden focus-within:border-blue-500">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 outline-none"
              />
            </div>
            <button className="px-6 py-2 bg-gray-50 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-100 transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2">
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Create"
          >
            <Video className="w-6 h-6" />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            aria-label="Notifications"
          >
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full"></span>
          </button>
          {/* <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="User menu"
          >
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </button> */}

          <ProfileDropdown />
        </div>
      </div>
    </nav>
  );
}
