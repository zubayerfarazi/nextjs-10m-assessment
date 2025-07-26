"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface TabItem {
  id: string;
  title: string;
}

export default function CourseDetailsTabs({ tabs }: { tabs: TabItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState({ left: true, right: false });
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (tabs.length > 0) {
      setActiveTab(tabs[0].id);
    }
  }, [tabs]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScrollState = () => {
      const atStart = container.scrollLeft <= 0;
      const atEnd =
        container.scrollLeft + container.clientWidth >= container.scrollWidth;
      setScrollPos({ left: atStart, right: atEnd });
    };

    container.addEventListener("scroll", handleScrollState);
    handleScrollState(); // initial call

    return () => {
      container.removeEventListener("scroll", handleScrollState);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 200;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleClick = (id: string) => {
    setActiveTab(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50 rounded-2xl -z-10"></div>

      <div className="flex items-center gap-3 py-4">
        <button
          onClick={() => scroll("left")}
          disabled={scrollPos.left}
          className={`group flex-shrink-0 w-10 h-10 rounded-full border bg-white transition-all duration-200 ${
            scrollPos.left
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-gray-300 hover:border-[#06011F] hover:bg-[#F0F0F5] hover:shadow-lg hover:scale-105 active:scale-95 text-gray-600 cursor-pointer"
          }`}
        >
          <IoIosArrowBack
            className={`w-5 h-5 mx-auto group-hover:text-[#06011F]`}
          />
        </button>

        <div className="relative flex-1 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleClick(tab.id)}
                className={`group relative flex-shrink-0 px-6 py-3 rounded-full text-sm cursor-pointer font-semibold transition-all duration-300 transform hover:scale-102 active:scale-95 ${
                  activeTab === tab.id
                    ? "bg-[#06011F] text-white shadow-lg"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-[#06011F] hover:bg-[#F0F0F5] hover:text-[#06011F] hover:shadow-md"
                }`}
              >
                <span className="relative z-10 whitespace-nowrap">
                  {tab.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll("right")}
          disabled={scrollPos.right}
          className={`group flex-shrink-0 w-10 h-10 rounded-full border bg-white transition-all duration-200 ${
            scrollPos.right
              ? "border-gray-200 text-gray-300 cursor-not-allowed"
              : "border-gray-300 hover:border-[#06011F] hover:bg-[#F0F0F5] hover:shadow-lg hover:scale-105 active:scale-95 text-gray-600 cursor-pointer"
          }`}
        >
          <IoIosArrowForward
            className={`w-5 h-5 mx-auto group-hover:text-[#06011F]`}
          />
        </button>
      </div>
    </div>
  );
}
