"use client";

import {
  Home,
  Compass,
  PlaySquare,
  Clock,
  ThumbsUp,
  History,
  Film,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Music,
  Radio,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const mainMenuItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Compass, label: "Explore" },
    { icon: PlaySquare, label: "Shorts" },
    { icon: PlaySquare, label: "Subscriptions" },
  ];

  const libraryItems = [
    { icon: PlaySquare, label: "Library" },
    { icon: History, label: "History" },
    { icon: Clock, label: "Watch Later" },
    { icon: ThumbsUp, label: "Liked Videos" },
  ];

  const exploreItems = [
    { icon: Music, label: "Music" },
    { icon: Film, label: "Movies" },
    { icon: Radio, label: "Live" },
    { icon: Gamepad2, label: "Gaming" },
    { icon: Newspaper, label: "News" },
    { icon: Trophy, label: "Sports" },
    { icon: Lightbulb, label: "Learning" },
    { icon: Shirt, label: "Fashion & Beauty" },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-14 h-[calc(100vh-3.5rem)] bg-white transition-all duration-300 overflow-y-auto z-40 border-r border-gray-200 ${
          isOpen ? "w-60" : "w-20"
        }`}
      >
        <div className="py-2">
          {/* Main Menu */}
          <div className="px-3 mb-2">
            {mainMenuItems.map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center gap-6 px-3 py-2.5 rounded-lg transition-colors ${
                  item.active
                    ? "bg-gray-100 font-medium text-gray-900"
                    : "hover:bg-gray-100 text-gray-900"
                } ${!isOpen && "justify-center"}`}
              >
                <item.icon className="w-6 h-6 flex-shrink-0" />
                {isOpen && <span className="text-sm font-medium">{item.label}</span>}
              </button>
            ))}
          </div>

          {isOpen && <div className="border-t border-gray-200 my-2"></div>}

          {/* Library Section */}
          {isOpen && (
            <div className="px-3 mb-2">
              {libraryItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-6 px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-900"
                >
                  <item.icon className="w-6 h-6 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          )}

          {isOpen && <div className="border-t border-gray-200 my-2"></div>}

          {/* Explore Section */}
          {isOpen && (
            <div className="px-3">
              <h3 className="px-3 py-2 text-sm font-semibold text-gray-900">
                Explore
              </h3>
              {exploreItems.map((item, index) => (
                <button
                  key={index}
                  className="w-full flex items-center gap-6 px-3 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-900"
                >
                  <item.icon className="w-6 h-6 flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => {}}
        ></div>
      )}
    </>
  );
}
