import { AllTilesData } from "@/lib/data";
import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";


const DetailsPage = async ({ params }) => {
  const { details } = await params;
  const tiles = await AllTilesData();

  const tile = tiles.find(t => details == t.id)

  const { id,
    title,
    description,
    image,
    category,
    price,
    currency,
    dimensions,
    material,
    inStock } = tile


  return (
    <div className="my-10 flex gap-4 container mx-auto">

      <div className="rounded-xl">
        <Image src={image} alt={title} width={60} height={60} className="w-160 h-160"></Image>
      </div>
      <div>
        <div className="space-y-15">
          <div className="space-y-5">
            <p className="inline-flex items-center px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
              <span className="w-1.5 h-1.5 mr-2 rounded-full bg-blue-500"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">
                {category}
              </span>
            </p>
            <h1 className="text-3xl font-extrabold">{title}</h1>
            <p className="font-bold text-gray-500">{description}</p>
          </div>
          <div className="font-bold">
            <span className="text-5xl">${price}</span><span>{currency}</span>
          </div>

          <div>
            {
              inStock ? <div className="text-green-700 font-bold flex gap-2 items-center"><MdCheckCircle /> <span>IN STOCK</span> <span className="text-sm">Ready to ship</span></div>
                :
                <div className="text-red-600 font-bold flex gap-2 items-center"><IoIosCloseCircle /><span>STOCK OUT</span> <span className="text-sm">Re-stocking soon</span></div>
            }
          </div>
          <div className="bg-blue-800 hover:bg-transparent text-white hover:text-blue-800 border border-blue-800 text-center w-50 p-3 rounded-full font-bold">
            <button className="text-center">
              <div className="flex items-center justify-center gap-3">
                <p>ADD TO CART</p>
                <FaShoppingCart />
              </div>
            </button>
          </div>
        </div>

        <div className="border border-gray-300 p-6 mt-5 rounded-md">
          <h1 className="font-extrabold text-xl">Product Specification</h1>

          <div>
            <p><span className="font-bold text-gray-700">Dimentions:</span> <span className="text-gray-400">{dimensions}</span></p>
            <p><span className="font-bold text-gray-700">Material: </span><span className="text-gray-400">{material}</span></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailsPage;