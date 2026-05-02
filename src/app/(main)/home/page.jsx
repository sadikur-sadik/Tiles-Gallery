import FeaturedCard from "@/components/Card/FeaturedCard"
import { AllTilesData } from "@/lib/data";


const HomePage = async() => {

  const tiles = await AllTilesData();

  
  return (
    <div className="container mx-auto">
      <h1 className="md:text-4xl text-xl font-bold text-center my-10">Featured Tiles</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 mb-10 justify-items-center">

        {tiles.slice(0,4).map((tile,i)=><FeaturedCard key={i} tile={tile}/>)}
      </div>
    </div>
  );
};

export default HomePage;