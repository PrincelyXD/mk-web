import { Link } from "react-router-dom";
import NavLogo from "../assets/images/logo.png";
import CustomPillButton from "./CustomPillButton";
import MobileHamMenu from "./MobileHamMenu";
import { NavRoutes } from "../resources/Resources";

const TopNav = () => {
  return (
    <nav className="w-full relative z-50 font-kanit h-20 ">
      <div className=" w-[95%] lg:w-[90%] flex items-center justify-between mx-auto h-full ">
        <Link className="h-fit w-fit" to="/">
          <img className="h-10 md:h-14" src={NavLogo} alt="" />
        </Link>

        <ul className=" hidden md:flex gap-x-3 text-xs lg:text-sm bg-white rounded-xl h-fit px-7 py-3 items-center">
          {NavRoutes.map((route, index) => (
            <li
              key={index}
              className="transition-all
hover:scale-[1.1] duration-300 "
            >
              <Link
                to={route.path}
                className=" 
                    text-slate-600 font-medium p-2"
              >
                {route.title}
              </Link>
            </li>
          ))}
        </ul>

        <span className="hidden md:flex">
          <CustomPillButton className="bg-white" text="Get In Touch" />
        </span>
        <MobileHamMenu />
      </div>
    </nav>
  );
};

export default TopNav;
