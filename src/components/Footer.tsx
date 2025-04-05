import CustomPillButton from "./CustomPillButton";
import arrowRightUp from "../assets/ui/icon_feather_arrow_up_right.svg";
import footerLogo from "../assets/ui/mklogofooter.svg";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import mapImage from "../assets/images/worldmap.png";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import { motion } from "framer-motion";
import Facebooksvg from "../assets/ui/Facebooksvg";
import Xsvg from "../assets/ui/Xsvg";
import InstagramSvg from "../assets/ui/InstagramSvg";
import { Link } from "react-router-dom";
const Footer = () => {

  const date = new Date();

  const currYear = date.getFullYear();

  const PingMarker = ({ delay, position,}: {
    delay: number;
    position: string;
  }) => (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: [1, 1.4, 1] }}
      transition={{ delay, duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute ${position}`}
    >
      <FmdGoodRoundedIcon fontSize="medium" />
    </motion.span>
  );
  return (
    <footer className="w-full font-kanit flex flex-col bg-mk-blue items-center">
      <div
        className="  flex flex-col relative bg-mk-blue
       text-white py-10 w-[90%] lg:w-[95%]  "
      >
        <h3
          className="text-4xl mb-2
         w-full relative z-10
          max-w-[295px]"
        >
          We're ready to talk opportunities
        </h3>
        <p className=" text-xs mb-8 font-light relative z-10 w-full max-w-[310px]">
          Write to us and we will find the best solution for you, we are
          committed to delivering only the best
        </p>

        <CustomPillButton
          className="bg-white scale-[0.8]  relative z-10
          w-fit border -ml-3"
          text="Get In Touch"
        />

        <span className="absolute right-0 top-20">
          <PingMarker delay={1} position="top-20 right-20" />
          <PingMarker delay={2} position="top-10 left-20" />
          <PingMarker delay={3} position="top-40 left-32" />
          <PingMarker delay={4} position="top-10 left-58" />
          <PingMarker delay={5} position="top-28 left-52" />
          <img className="  h-56" src={mapImage} alt="world-map" />
        </span>
      </div>

      <div
        className="font-kanit  bg-mk-blue
       text-white py-10 w-[90%] overflow-hidden lg:w-[90%] "
      >
        <div className="w-[1600px]  ">
          <span className="inline-flex mr-5 items-center gap-x-3 text-2xl">
            Lets Work Together
            <img className="h-5 " src={arrowRightUp} />
          </span>
          <span className="inline-flex mr-5 items-center gap-x-3 text-2xl">
            Lets Work Together
            <img className="h-5 " src={arrowRightUp} />
          </span>
          <span className="inline-flex mr-5 items-center gap-x-3 text-2xl">
            Lets Work Together
            <img className="h-5 " src={arrowRightUp} />
          </span>
          <span className="inline-flex mr-5 items-center gap-x-3 text-2xl">
            Lets Work Together
            <img className="h-5 " src={arrowRightUp} />
          </span>
          <span className="inline-flex mr-5 items-center gap-x-3 text-2xl">
            Lets Work Together
            <img className="h-5 " src={arrowRightUp} />
          </span>
        </div>

        <section className="pt-16 flex flex-col md:flex-row gap-y-10  justify-between">
          <div className="mr-5">
            <img className="h-9 mb-7" src={footerLogo} alt="" />
            <p className="text-xs font-light mb-3">
              223, Queens Drive, Kiev, Ukraine
            </p>
            <span className="text-sm flex gap-x-5">
              <Link to="/">
                <Facebooksvg />
              </Link>
              <Link to="/">
                <InstagramSvg />
              </Link>
              <Link to="/">
                <Xsvg />
              </Link>
            </span>
          </div>

          <div className=" flex flex-col sm:flex-row justify-between gap-y-10 gap-x-10 lg:gap-x-16">
            <ul>
              <p className=" border-b w-fit mb-3 font-semibold">Services</p>

              <li className="font-extralight py-1 text-sm md:text-sm">
                {" "}
                <Link to="/"> Website Development</Link>
              </li>
              <li className="font-extralight py-1 text-sm md:text-sm">
                {" "}
                <Link to="/">SEO</Link>{" "}
              </li>
              <li className="font-extralight py-1 text-sm md:text-sm">
                {" "}
                <Link to="/">Website Maintenance & Support</Link>{" "}
              </li>
              <li className="font-extralight py-1 text-sm md:text-sm">
                {" "}
                <Link to="/">CRM & API Intergration</Link>{" "}
              </li>
            </ul>
            <ul>
              <p className=" border-b w-fit mb-3 font-semibold">Company</p>

              <li className="font-extralight py-1 text-sm md:text-sm">
                {" "}
                <Link to="/"> About Us</Link>
              </li>
              <li className="font-extralight py-1 text-sm md:text-sm">
                {" "}
                <Link to="/">Projects</Link>{" "}
              </li>
              <li className="font-extralight py-1 text-sm md:text-sm">
                {" "}
                <Link to="/">Contact Us</Link>{" "}
              </li>
              <li className="font-extralight py-1 text-sm md:text-sm">
                {" "}
                <Link to="/">Blog</Link>{" "}
              </li>
            </ul>
            <ul>
              <p className=" border-b w-fit mb-3 font-semibold">Newsletter</p>

              <li className="font-extralight py-1 w-full max-w-[250px] text-sm md:text-sm">
                Feel free to reach out if you want to colaborate with us or
                simply have a chat
              </li>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="flex mt-2 gap-x-3 items-center"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#ffffff6e]
           
             outline-none
              rounded-[10px]
              py-3
              w-full
               indent-2
               text-xs
           "
                />
                <button
                  className=" cursor-pointer
               border flex h-fit p-1.5 items-center
               rounded-[10px] transition-all duration-300
                text-white hover:bg-white hover:text-mk-blue
                 justify-center "
                >
                  {" "}
                  <span className=" block -rotate-45">
                    <SendRoundedIcon />
                  </span>{" "}
                </button>
              </form>
            </ul>
          </div>
        </section>
      </div>

      <div className="w-[90%] text-sm flex
       justify-center items-center pt-3 pb-5 font-extralight
        text-white border-t">
      <p>©{currYear}. MKWEB Agency. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
