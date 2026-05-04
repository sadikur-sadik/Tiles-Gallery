import FeaturedCard from "@/components/Card/FeaturedCard"
import { AllTilesData } from "@/lib/data";


const HomePage = async () => {

  const tiles = await AllTilesData();


  return (

    <div className="container mx-auto animate__animated animate__bounceIn my-10">
      <h1 className="md:text-4xl text-xl bg-linear-to-r from-blue-900 via-blue-700 to-sky-600 bg-clip-text text-transparent font-bold text-center my-10">Featured Tiles</h1>
      
        <div className="W-11/12 sm:w-auto flex justify-center items-center"> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {tiles.slice(0, 2).map((tile, i) => <FeaturedCard key={i} tile={tile} />)}
          {tiles.slice(3, 5).map((tile, i) => <FeaturedCard key={i} tile={tile} />)}
        </div>
        </div>
     
    </div >


  );
};

export default HomePage;