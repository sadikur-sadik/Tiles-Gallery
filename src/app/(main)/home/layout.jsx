import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import MarqueePage from "@/components/Marquee/MarqueePage";
import Footer from "@/components/Footer/Footer";
const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <MarqueePage/>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;