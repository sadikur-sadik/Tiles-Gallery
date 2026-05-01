import Image from 'next/image';
import banner from '../../assets/banner.png';
import Link from 'next/link';

import { HiArrowRight } from "react-icons/hi";
import { AiOutlineShopping } from "react-icons/ai";

const Banner = () => {
  return (
    
    <div className='flex flex-col-reverse md:flex-row items-center h-auto md:h-150 container mx-auto my-10 border rounded-2xl overflow-hidden'>
      
      
      <div className="flex-1 h-auto md:h-150 flex justify-center items-center p-10 md:p-0">
        <div className='space-y-10 md:space-y-20 md:ml-5'>
          <div className='space-y-5 '>
            <h1 className='text-3xl md:text-5xl font-bold text-blue-800'>
              Discover Your Perfect Aesthetic
            </h1>
            <p className='text-gray-500'>
              Discover the world&apos;s most exquisite collection of luxury marble and stone. <br />
              Experience unmatched quality and bespoke service.
            </p>
          </div>
          
          
          <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-3'>
            <button className='btn flex items-center justify-center gap-2 border hover:bg-blue-800 hover:text-white border-blue-800 p-6 text-blue-800 font-bold rounded-full'>
              <Link href="/register" className="flex items-center gap-2">
                GET STARTED <HiArrowRight />
              </Link>
            </button>
            
            <button className='btn flex items-center justify-center gap-2 hover:border-blue-800 hover:text-blue-800 hover:border hover:bg-transparent bg-blue-800 p-6 text-white font-bold rounded-full'>
              <Link href="/home" className="flex items-center gap-2">
                BROWSE NOW <AiOutlineShopping />
              </Link>
            </button>
          </div>
        </div>
      </div>

      
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