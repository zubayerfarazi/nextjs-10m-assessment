"use client";

import { useRef, useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoPlayCircle } from "react-icons/io5";
import Image from "next/image";
import SectionHeader from "../section-header";

interface TestimonialItem {
  id: string;
  name: string;
  description: string;
  testimonial: string;
  profile_image: string;
  thumb: string;
  video_url: string;
}

const TestimonialsSection = ({
  data,
}: {
  data: { name: string; values: TestimonialItem[] };
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    }
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = 300;
      el.scrollBy({
        left: dir === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll);
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <section className="mt-6">
      <SectionHeader title={data.name}/>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="absolute z-10 left-0 top-1/2 -translate-y-1/2 p-2 rounded-full shadow bg-white border border-gray-300 hover:bg-gray-100 transition disabled:opacity-30"
        >
          <IoIosArrowBack size={24} />
        </button>
        
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide mt-4"
        >
          {data.values.map((item) => {
            const isExpanded = expandedId === item.id;
            const hasLongText = item.testimonial.length > 180;
            const displayText = isExpanded
              ? item.testimonial
              : item.testimonial.slice(0, 180);

            return (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-80 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition p-4"
              >
                
                {item.video_url && (
                  <div className="relative rounded-lg overflow-hidden mb-4 aspect-video">
                    <Image
                      src={item.thumb}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                    <a
                      href={`https://www.youtube.com/watch?v=${item.video_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition"
                    >
                      <IoPlayCircle className="text-white text-5xl" />
                    </a>
                  </div>
                )}

                {!item.video_url && (
                  <div className="text-sm text-justify mb-3 transition-all duration-300 ease-in-out">
                    <p
                      className={`whitespace-pre-line ${
                        isExpanded
                          ? "max-h-full"
                          : "max-h-[120px] overflow-hidden"
                      }`}
                    >
                      {displayText}
                      {hasLongText && !isExpanded && "..."}
                    </p>
                    {hasLongText && (
                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : item.id)
                        }
                        className="text-blue-500 text-sm mt-1 hover:underline"
                      >
                        {isExpanded ? "See less" : "See more"}
                      </button>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-100">
                  <Image
                    src={item.profile_image}
                    alt={item.name}
                    height={10}
                    width={10}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="absolute z-10 right-0 top-1/2 -translate-y-1/2 p-2 rounded-full shadow bg-white border border-gray-300 hover:bg-gray-100 transition disabled:opacity-30"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </section>
  );
}

export default TestimonialsSection;