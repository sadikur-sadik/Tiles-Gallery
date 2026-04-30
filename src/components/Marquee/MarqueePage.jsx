import { AllTilesData } from "@/lib/data";
import Marquee from "react-fast-marquee";

const MarqueePage = async () => {
  const tiles = await AllTilesData();

  return (
    <div className="py-4 bg-blue-900 text-white font-bold">
      
      <Marquee speed={50} pauseOnHover={true}>
        {tiles.slice(2,8).map((tile, i) => (
          <span key={i} className="mx-10 ">
            {`New Arrivals: ${tile.title} | Weekly Feature: Modern Geometric Patterns | Join the Community...`}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueePage;