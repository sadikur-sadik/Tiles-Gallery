"use client"

import { MdArrowForward } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const Card = (tile) => {
  const { id,
    title,
    description,
    image,
    category,
    price,
    currency,
    dimensions,
    material,
    inStock } = tile.tile

  return (
    <div className="bg-white shadow-md hover:shadow-2xl my-10 rounded-xl p-6 max-w-80 flex flex-col justify-between">
      <div className="space-y-4">
        
        {/* Simple Rectangular Image Container */}
        <div className="w-50 h-48 mx-auto border-2 border-gray-100 rounded-xl overflow-hidden relative">
          <Image 
            src={image} 
            alt={title} 
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-2">
          <h1 className="font-bold text-xl text-center h-12 line-clamp-2">{title}</h1>
        </div>
      </div>

      <div>
        <Link href={`/all-tiles/${id}`}>
          <button className="btn bg-blue-800 w-full rounded-full flex gap-1 items-center justify-center text-white font-bold border-none">
            <span>VIEW DETAILS</span><MdArrowForward className="h-5 w-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;