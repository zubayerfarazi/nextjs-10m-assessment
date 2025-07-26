"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface MediaItem {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
}

const MediaSlider = ({ media }: { media: MediaItem[] }) => {
  const [current, setCurrent] = useState(0);
  const currentMedia = media[current];
  const thumbContainerRef = useRef<HTMLDivElement>(null);

  const getThumbnail = (item: MediaItem) => {
    return (
      item.thumbnail_url ||
      (item.resource_type === "video"
        ? `https://img.youtube.com/vi/${item.resource_value}/0.jpg`
        : item.resource_value)
    );
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % media.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <div className="max-w-2xl md:max-w-sm bg-white">
      <div className="relative aspect-video overflow-hidden mb-1 p-1">
        {currentMedia.resource_type === "video" ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${currentMedia.resource_value}`}
            title="Video Preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <Image
            src={currentMedia.resource_value}
            alt="preview"
            fill
            className="object-cover"
          />
        )}

        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-black p-1 rounded-full z-10 cursor-pointer"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-black p-1 rounded-full z-10 cursor-pointer"
        >
          <IoIosArrowForward />
        </button>
      </div>

      <div
        ref={thumbContainerRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide px-3 pb-1"
      >
        {media.map((item, index) => {
          const thumb = getThumbnail(item);

          return (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`min-w-[72px] h-10 rounded-md overflow-hidden border transition cursor-pointer ${
                index === current
                  ? "border-2 border-[var(--color-primary-button)]"
                  : "border-gray-300"
              }`}
            >
              <Image
                src={thumb}
                alt={`thumb-${index}`}
                width={72}
                height={54}
                className="object-cover w-full h-full"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MediaSlider;
