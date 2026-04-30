import { AllTilesData } from "@/lib/data";
import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const DetailsPage = async ({ params }) => {
  const { details } = await params;
  const tiles = await AllTilesData();

  const tile = tiles.find((t) => details == t.id);

  const {
    id,
    title,
    description,
    image,
    category,
    price,
    currency,
    dimensions,
    material,
    inStock,
  } = tile;

  return (
    <div className="my-10 flex flex-col md:flex-row gap-10 container mx-auto px-4">
      {/* Left Side: Image - Fixed to ensure large display */}
      <div className="flex-1 flex justify-center items-start">
        <div className="relative w-full h-125">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="flex-1">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
              <span className="w-2 h-2 mr-2 rounded-full bg-blue-500"></span>
              <span className="text-[12px] font-bold uppercase tracking-wider text-blue-200">
                {category}
              </span>
            </p>
            <h1 className="text-4xl font-extrabold">{title}</h1>
            <p className="text-lg font-medium text-gray-500 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-black">${price}</span>
            <span className="text-xl font-bold text-gray-400">{currency}</span>
          </div>

          <div>
            {inStock ? (
              <div className="text-green-700 font-bold flex gap-2 items-center">
                <MdCheckCircle className="text-xl" /> <span>IN STOCK</span>{" "}
                <span className="text-sm font-normal text-gray-500">
                  | Ready to ship
                </span>
              </div>
            ) : (
              <div className="text-red-600 font-bold flex gap-2 items-center">
                <IoIosCloseCircle className="text-xl" />
                <span>STOCK OUT</span>{" "}
                <span className="text-sm font-normal text-gray-500">
                  | Re-stocking soon
                </span>
              </div>
            )}
          </div>

          <button className="bg-blue-800 hover:bg-transparent text-white hover:text-blue-800 border border-blue-800 w-full max-w-xs py-4 rounded-full font-bold">
            <div className="flex items-center justify-center gap-3">
              <span>ADD TO CART</span>
              <FaShoppingCart />
            </div>
          </button>
        </div>

        <div className="border border-gray-200 p-8 mt-10 rounded-xl bg-gray-50">
          <h2 className="font-extrabold text-xl mb-4">Product Specification</h2>
          <div className="space-y-3">
            <p className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-bold text-gray-700">Dimensions:</span>
              <span className="text-gray-500">{dimensions}</span>
            </p>
            <p className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-bold text-gray-700">Material:</span>
              <span className="text-gray-500">{material}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;