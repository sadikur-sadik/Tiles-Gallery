import { AllTilesData } from '@/lib/data';
import Card from '@/components/Card/Card';

const AllTiles = async () => {
  const tiles = await AllTilesData()
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="md:text-4xl text-xl font-bold text-center my-10">All Tiles</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 mb-10 justify-items-center">

          {tiles.map((tile, i) => <Card key={i} tile={tile} />)}
        </div>
      </div>
    </div>
  );
};

export default AllTiles;