"use client"

import { MdArrowForward } from "react-icons/md";

import Image from "next/image";


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
    <div className="bg-white shadow-md hover:shadow-2xl rounded-xl p-6">
      <div className="space-y-4">
        <div className="border-2 rounded-xl"><Image src={image} alt={title} height={60} width={60} className="h-40 w-full object-cover rounded-xl"></Image></div>
        <div className="space-y-2 ">
          <h1 className="font-bold text-xl h-5  ">{title}</h1>
          <p className="text-md text-gray-400 h-15 ">{description}</p>

          <div className="relative h-5">
            <p><span className="font-bold text-2xl">{price}</span><span className="text-sm">$</span></p>
            <div className="absolute top-1 right-2">
              {
                inStock
                  ?
                  <div className="badge badge-success text-sm rounded-full text-white font-bold">In Stock</div>
                  :
                  <div className="badge badge-error text-sm rounded-full text-white font-bold">Stock Out</div>
              }
            </div>

          </div>

        </div>
      </div>

      <div>
        <button className="btn btn-success w-full rounded-full mt-5 flex gap-1 items-center justify-center text-white text-bold">
          <span>VIEW DETAILS</span><MdArrowForward className="h-5 w-5"/> 
        </button>
      </div>
    </div>
  );
};

export default Card;