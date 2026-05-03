"use client"

import { HiOutlineSearch } from "react-icons/hi";
import Link from "next/link";

const NoCard = () => {
  return (
    <div className="container mx-auto px-4 w-full flex flex-col items-center justify-center py-24">
      <div className="max-w-sm w-full flex flex-col items-center">
        
        {/* Minimalist Icon */}
        <div className="bg-slate-50 p-6 rounded-full mb-6">
          <HiOutlineSearch className="h-10 w-10 text-slate-400" />
        </div>

        {/* Text Content */}
        <div className="space-y-1 text-center">
          <h2 className="text-xl font-semibold text-slate-900">
            No matches found
          </h2>
          <p className="text-slate-500 text-sm">
            We could not find what you are looking for. Try a different search term.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default NoCard;