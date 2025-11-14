"use client";

import { Menu, Search, Video, Bell } from "lucide-react";
import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";
import { ThemeToggle } from "./globals/ThemeToggle";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }} className="fixed top-0 left-0 right-0 z-50 border-b h-14 transition-colors duration-200">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-full transition-colors hover:bg-gray-200"
            style={{ color: 'var(--text)' }}
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
            <div className="flex-1 flex items-center border rounded-l-full overflow-hidden focus-within:border-blue-500" style={{ borderColor: 'var(--border)' }}>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
                className="w-full px-4 py-2 outline-none"
              />
            </div>
            <button className="px-6 py-2 border border-l-0 rounded-r-full transition-colors" style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text)' }}>
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <ThemeToggle/>
        <div className="flex items-center gap-2">
          <button
            className="p-2 rounded-full transition-colors hover:bg-gray-200"
            style={{ color: 'var(--text)' }}
            aria-label="Create"
          >
            <Video className="w-6 h-6" />
          </button>
          <button
            className="p-2 rounded-full transition-colors relative hover:bg-gray-200"
            style={{ color: 'var(--text)' }}
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
