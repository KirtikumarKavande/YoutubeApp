"use client";

import { ChevronRight } from "lucide-react";
import { useRef } from "react";

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

  const categoryMenuContainer=useRef(null)

  function scrollHorizontal(direction:string){
    if(!categoryMenuContainer.current) return 

    console.log("kkk",categoryMenuContainer.scrollWidth)
        const maxScrollLeft = categoryMenuContainer.scrollWidth - categoryMenuContainer.clientWidth;
    // If already near the end, show alert
    if (Math.ceil(categoryMenuContainer.scrollLeft) >= maxScrollLeft) {
      alert("You've reached the end!");
      return;
    }


    // categoryMenuContainer.current.scrollBy({
    //   left:150,
    //    behavior: "smooth",
    // })
    // if(direction==="right"){

    // }


  }
  return (
    <div ref={categoryMenuContainer} className="sticky top-14 z-30 bg-white border-b border-gray-200 overflow-x-scroll scrollbar-hide   "style={{width:"calc(100vw - 300px) "}} >
      <div className="flex items-center gap-3 px-4 py-3 b ">
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
        <button className="p-1.5 hover:bg-gray-600 rounded-full transition-colors shrink-0 fixed z-50 right-4 bg-black" onClick={()=>{scrollHorizontal("right")}}>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
