import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import MarqueePage from "@/components/Marquee/MarqueePage";
const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <MarqueePage/>
      {children}
    </div>
  );
};

export default Layout;