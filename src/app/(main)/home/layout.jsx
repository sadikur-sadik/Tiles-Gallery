import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import MarqueePage from "@/components/Marquee/MarqueePage";
import Footer from "@/components/Footer/Footer";
import About from "@/components/About/About";

const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <MarqueePage/>
      {children}
      <About/>
      <Footer/>
    </div>
  );
};

export default Layout;