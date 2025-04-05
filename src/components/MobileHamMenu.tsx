import { AnimatePresence, motion } from "framer-motion";
import { Sling as Hamburger } from "hamburger-react";
import { useState } from "react";
import { NavRoutes } from "../resources/Resources";
import { Link } from "react-router-dom";
import CustomPillButton from "./CustomPillButton";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
const MobileHamMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex md:hidden">
      <Hamburger
        direction="left"
        toggled={isOpen}
        toggle={setIsOpen}
        size={25}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="hamDropdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
            transition={{ duration: 0.3 }}
            layout
            onClick={() => setIsOpen(false)}
            className="fixed top-0 left-0
       bg-[#0B1BA7]/5 backdrop-blur-[5px] pl-5 overflow-hidden border-white/10
        w-full h-full"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "350px" }}
              exit={{ opacity: 0, width: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white absolute
       rounded-l-4xl
        right-0 h-full
         w-[300px] p-5
          shadow-custom"
            >
              <Hamburger
                rounded
                direction="right"
                toggled={isOpen}
                toggle={setIsOpen}
                size={25}
              />

              <ul className=" my-10 flex flex-col   gap-y-3 ">
                {NavRoutes.map((route, index) => (
                  <motion.li
                    initial={{ transform: "translateY(30px)", opacity: 0 }}
                    animate={{ transform: "translateY(0px)", opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      delay: 0.1 + index / 10,
                    }}
                    key={index}
                    className=" flex"
                  >
                    <Link
                      className="text-gray-600 py-3
      hover:translate-x-2
       transition-all
        duration-400 w-full  "
                      to={route.path}
                    >
                      {" "}
                      <ChevronRightRoundedIcon style={{ marginRight: "10px" }} />
                      {route.title}
                    </Link>{" "}
                  </motion.li>
                ))}
              </ul>
              <CustomPillButton
                className="bg-mk-background  w-fit"
                text="Get In Touch"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileHamMenu;
