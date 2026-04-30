import Image from 'next/image';
import banner from '../../assets/banner.png';
import Link from 'next/link';
// Importing relatable icons
import { HiArrowRight } from "react-icons/hi";
import { AiOutlineShopping } from "react-icons/ai";

const Banner = () => {
  return (
    /* Added border, rounded-2xl, and overflow-hidden to the parent container */
    <div className='flex flex-col-reverse md:flex-row items-center h-auto md:h-150 container mx-auto my-10 border rounded-2xl overflow-hidden'>
      
      {/* Content Section */}
      <div className="flex-1 h-auto md:h-150 flex justify-center items-center p-10 md:p-0">
        <div className='space-y-10 md:space-y-20'>
          <div className='space-y-5'>
            <h1 className='text-3xl md:text-5xl font-bold text-blue-800'>
              CURATING YOUR VISION,<br />ONE TILE AT A TIME
            </h1>
            <p className='text-gray-500'>
              Discover the world&apos;s most exquisite collection of luxury marble and stone. <br />
              Experience unmatched quality and bespoke service.
            </p>
          </div>
          
          {/* Button section: space-y for mobile stack, space-x for desktop */}
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3'>
            <button className='btn flex items-center justify-center gap-2 border hover:bg-blue-800 hover:text-white border-blue-800 p-6 text-blue-800 font-bold rounded-full'>
              <Link href="/" className="flex items-center gap-2">
                GET STARTED <HiArrowRight />
              </Link>
            </button>
            
            <button className='btn flex items-center justify-center gap-2 hover:border-blue-800 hover:text-blue-800 hover:border hover:bg-transparent bg-blue-800 p-6 text-white font-bold rounded-full'>
              <Link href="/home" className="flex items-center gap-2">
                SHOP LUXURY TILES <AiOutlineShopping />
              </Link>
            </button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className='flex-1 w-full h-full'>
        <Image 
          src={banner} 
          alt='Banner Photo'
          priority={true} 
          className='w-full h-80 md:h-150 object-cover' 
        />
      </div>
    </div>
  );
};

export default Banner;