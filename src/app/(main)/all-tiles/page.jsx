import { ImSearch } from "react-icons/im";
import { AllTilesData } from '@/lib/data';
import Card from '@/components/Card/Card';
import { IoIosArrowDown } from "react-icons/io";

const AllTiles = async () => {
  const tiles = await AllTilesData()
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="md:text-4xl text-xl font-bold text-center my-10">All Tiles</h1>
        <div className='grid grid-cols-12 my-2 gap-3'>
          <div className='col-span-9 flex items-center gap-3'>
            <input type="text" placeholder='Search Tiles (e.g.Ceramics,Marble)' className='border border-gray-200 p-2  rounded-md w-8/10' />
            <button className='btn bg-blue-800 text-white w-2/10 flex items-center gap-5'><span>SEARCH</span><ImSearch /></button>
          </div>
          <div className="dropdown dropdown-bottom dropdown-center col-span-3">
            <div tabIndex={0} role="button" className="btn m-1 bg-transparent  rounded-md text-gray-400 font-medium flex justify-between items-center"><span>Filter By</span><IoIosArrowDown/></div>
            <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 mb-10 justify-items-center">

          {tiles.map((tile, i) => <Card key={i} tile={tile} />)}
        </div>
      </div>
    </div>
  );
};

export default AllTiles;