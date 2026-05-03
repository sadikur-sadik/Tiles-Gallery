import { AllTilesData } from '@/lib/data';
import Processed from "@/components/Processed/Processed";

const AllTiles = async () => {
  const tiles = await AllTilesData()
  return (
    <div>
      <div className="container mx-auto mt-10 ">

        <h1 className="text-blue-800 text-3xl font-bold text-center my-5">All Tiles</h1>
        <Processed tiles={tiles}></Processed>
      </div>
    </div>
  );
};

export default AllTiles;