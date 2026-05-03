import { AllTilesData } from '@/lib/data';
import Processed from "@/components/Processed/Processed";

const AllTiles = async () => {
  const tiles = await AllTilesData()
  return (
    <div>
      <div className="container mx-auto mt-10 animate__animated animate__fadeIn">

        <h1 className="bg-linear-to-r from-blue-800 via-blue-600 to-sky-400 bg-clip-text text-transparent text-3xl font-bold text-center my-5">All Tiles</h1>
        <Processed tiles={tiles}></Processed>
      </div>
    </div>
  );
};

export default AllTiles;