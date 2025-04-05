import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
const Layout = () => {
  return (
    <div className="bg-mk-background
     relative mx-auto h-[700px] w-full max-w-[1600px] min-w-[344px]">
      <TopNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
