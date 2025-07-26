"use client"

import Image from "next/image";
import LanguageSelector from "./component/LanguageSelector";
import { BiSearch } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className="w-full container max-w-screen-sm md:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 py-4 shadow-md flex items-center justify-between bg-white">
      <div className="flex items-center gap-2">
        <Image
          src="/10mslogo-svg.svg"
          alt="10 minute logo"
          width={100}
          height={500}
        />
      </div>

      <div className="hidden md:flex flex-1 max-w-2xl mx-8">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-gray-400 transition-all duration-200"
            placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
          />
        </div>
      </div>

      <LanguageSelector />
    </nav>
  );
}
