import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import HomePage from "@/components/Home/Home";
import MarqueePage from "@/components/Marquee/MarqueePage";
import Navbar from "@/components/Navbar/Navbar";

const HomePageData = async () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <MarqueePage/>
      <HomePage></HomePage>
      <About/>
      <Footer/>
    </>

  );
};

export default HomePageData;