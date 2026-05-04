import FeaturedCard from "@/components/Card/FeaturedCard"
import { AllTilesData } from "@/lib/data";


const HomePage = async () => {

  const tiles = await AllTilesData();


  return (
    
    <div className="container mx-auto animate__animated animate__bounceIn">
      <h1 className="md:text-4xl text-xl bg-linear-to-r from-blue-900 via-blue-700 to-sky-600 bg-clip-text text-transparent font-bold text-center my-10">Featured Tiles</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mb-10 container sm:w-full w-11/12 mx-auto gap-3 md:gap-10">
        {tiles.slice(0, 2).map((tile, i) => <FeaturedCard key={i} tile={tile} />)}
        {tiles.slice(3, 5).map((tile, i) => <FeaturedCard key={i} tile={tile}  />)}

      </div >
    </div >
    

  );
};

export default HomePage;