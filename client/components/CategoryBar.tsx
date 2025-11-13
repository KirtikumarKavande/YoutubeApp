"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

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
  "Entertainment",
  "Technology",
  "Cooking",
  "Travel",
  "Science",
  "Comedy",
];

export default function CategoryBar() {
  const categoryMenuContainer = useRef(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isDisableScrolling, setIsDisableScrolling] = useState({
    leftSide: true,
    rightSide: false,
  });
  const [isScrollable, setIsScrollable] = useState(false);

  const checkIfScrollable = () => {
    if (!categoryMenuContainer.current) return;
    
    const container: HTMLDivElement = categoryMenuContainer.current;
    const scrollable = container.scrollWidth > container.clientWidth;
    setIsScrollable(scrollable);

    if (scrollable) {
      const isAtEnd =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 1;
      const isAtStart = container.scrollLeft <= 1;

      setIsDisableScrolling({
        leftSide: isAtStart,
        rightSide: isAtEnd,
      });
    }
  };

  useEffect(() => {
    checkIfScrollable();

    const handleResize = () => {
      checkIfScrollable();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function scrollHorizontal(direction: string) {
    if (!categoryMenuContainer.current) return;

    const container: HTMLDivElement = categoryMenuContainer.current;
    const scrollAmount = 200;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });

    if (direction === "right") {
      setIsDisableScrolling((prev) => ({ ...prev, leftSide: false }));
    } else {
      setIsDisableScrolling((prev) => ({ ...prev, rightSide: false }));
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Check if reached the end after scroll animation completes
    timeoutRef.current = setTimeout(() => {
      const isAtEnd =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 1;
      const isAtStart = container.scrollLeft <= 1;

      if (direction === "right" && isAtEnd) {
        setIsDisableScrolling((prev) => ({ ...prev, rightSide: true }));
      } else if (direction === "left" && isAtStart) {
        setIsDisableScrolling((prev) => ({ ...prev, leftSide: true }));
      }

      timeoutRef.current = null;
    }, 300);
  }

  return (
    <div
      ref={categoryMenuContainer}
      className="sticky top-14 z-30 bg-white border-b border-gray-200 overflow-x-scroll scrollbar-hide"
      style={{ width: "calc(100vw - 260px)" }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        {/* Only show left button if scrollable AND not at start */}
        {isScrollable && !isDisableScrolling.leftSide && (
          <button
            className="p-1.5 hover:bg-gray-600 rounded-full transition-colors shrink-0 fixed z-50 left-60 bg-black"
            onClick={() => {
              scrollHorizontal("left");
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap text-sm font-medium transition-colors shrink-0 ${
              index === 0
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}

        {/* Only show right button if scrollable AND not at end */}
        {isScrollable && !isDisableScrolling.rightSide && (
          <button
            className="p-1.5 hover:bg-gray-600 rounded-full transition-colors shrink-0 fixed z-50 right-4 bg-black"
            onClick={() => {
              scrollHorizontal("right");
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}