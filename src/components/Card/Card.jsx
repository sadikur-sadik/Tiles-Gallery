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
    <div className="bg-white shadow-md hover:shadow-2xl rounded-xl p-6 max-w-80 flex flex-col justify-between">
      <div className="space-y-4">
        
        {/* Simple Rectangular Image Container */}
        <div className="w-full h-48 border-2 border-gray-100 rounded-xl overflow-hidden relative">
          <Image 
            src={image} 
            alt={title} 
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-2">
          <h1 className="font-bold text-xl h-12 line-clamp-2">{title}</h1>
          <p className="text-md text-gray-400 h-12">
            <span className="line-clamp-2">{description}</span>
          </p>

          <div className="relative h-8 flex items-center justify-between mt-2">
            <p>
                <span className="font-bold text-2xl">{price}</span>
                <span className="text-sm ml-1">{currency || "$"}</span>
            </p>
            <div>
              {
                inStock
                  ?
                  <div className="badge badge-success text-[10px] uppercase rounded-full text-white font-bold px-3 py-2">In Stock</div>
                  :
                  <div className="badge badge-error text-[10px] uppercase rounded-full text-white font-bold px-3 py-2">Stock Out</div>
              }
            </div>
          </div>
        </div>
      </div>

      <div>
        <Link href={`/all-tiles/${id}`}>
          <button className="btn bg-blue-800 w-full rounded-full mt-5 flex gap-1 items-center justify-center text-white font-bold border-none">
            <span>VIEW DETAILS</span><MdArrowForward className="h-5 w-5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;