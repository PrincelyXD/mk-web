import CustomPillButton from "../../components/CustomPillButton";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import ParralaxImage from "../../components/ParralaxImage";
import heroBg from "/background.png";
import wobleyImg from "/wobley.png";
import { useState } from "react";
import {motion} from 'framer-motion'
const HeroSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  





  return (
    <div className="font-kanit flex w-[88%] flex-col items-center overflow-hidden pt-10 md:h-[700px]">
      <main className="flex w-full max-w-[1150px] flex-col justify-between md:flex-row">
        <img
          className="absolute top-0 left-[50%] h-[800px] translate-x-[-50%]"
          src={heroBg}
          alt=""
        />

        <section className="relative z-10">
        <motion.h1
  className="text-mk-blue pt-0 md:pt-10 relative w-fit text-7xl font-bold
   uppercase transition-all duration-300 md:text-7xl lg:text-8xl"
  variants={containerVariants}
  initial="hidden"
  animate="show"
>
{["we are", "skilled", "in"].map((line, i) => (
    <motion.span key={i} variants={itemVariants} className="block">
      {line}
    </motion.span>
  ))}


            <motion.span
                variants={itemVariants}
             className="flex items-center gap-x-7">
              <motion.span 
                 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col text-xl underline">
                <span className="underline">web</span>
                <span className="underline">design</span>
              </motion.span>
              and{" "}
              <motion.span 
                 initial={{ opacity: 0, y: -20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -right-24 bottom-[74px]
               -rotate-90 text-xl underline lg:-right-16">
                {" "}
                development
              </motion.span>
            </motion.span>
          </motion.h1>


          <CustomPillButton
            className="font-kanit mt-7 w-fit bg-white"
            text="Get Started Now"
          />
        </section>

        <section className="relative z-10 mt-10 -ml-5 flex h-[500px] w-[405px] scale-[0.68] gap-x-5 pt-10 transition-transform duration-300 md:mt-0 md:-ml-0 md:scale-[0.8] lg:scale-[1]">
          <img
            className="absolute -top-20 left-20 h-13 md:top-5 md:left-22 md:h-8"
            src={wobleyImg}
            alt=""
          />

          <ParralaxImage
            start={-50}
            end={250}
            className="absolute z-10 h-[400px] w-[200px] rounded-md rounded-l-full bg-[image:url('/group_65.png')] bg-cover bg-center shadow-2xl"
          />
          <ParralaxImage
            start={-150}
            end={80}
            className="absolute top-0 right-0 z-10 h-[400px] w-[200px] rounded-md rounded-r-full bg-[image:url('/rectangle_12.jpg')] bg-cover bg-center shadow-2xl"
          />

          <div className="bg-mk-background absolute right-15 bottom-[18%] z-20 flex h-14 w-14 rounded-full bg-[image:url('/image.png')] bg-cover bg-center p-1">
            <span className="bg-mk-blue flex h-full w-full cursor-pointer items-center justify-center rounded-full text-white uppercase">
              <PlayArrowRoundedIcon />
            </span>
            <span className="text-mk-blue absolute -right-12 flex flex-col justify-center pt-2 text-xs leading-4 font-bold uppercase">
              <span>Watch</span>
              <span>Video</span>
            </span>
          </div>
        </section>
      </main>

      <div
        className={`z-20 flex h-[100px] w-full max-w-[1150px] justify-center pt-5 transition-all duration-400 md:justify-end`}
      >
        <section className={`relative flex w-[300px]`}>
          <span
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
            className="left-0 mr-5 flex w-fit"
          >
            <span
              className={`h-11 w-10 rounded-full transition-all duration-400 md:h-13 md:w-12 ${isExpanded ? "mr-0" : "-mr-3"} block bg-[image:url('cust1.png')] bg-cover bg-center`}
            ></span>
            <span
              className={`h-11 w-10 rounded-full transition-all duration-400 md:h-13 md:w-12 ${isExpanded ? "mr-0" : "-mr-3"} block bg-[image:url('cust2.png')] bg-cover bg-center`}
            ></span>
            <span
              className={`h-11 w-10 rounded-full transition-all duration-400 md:h-13 md:w-12 ${isExpanded ? "mr-0" : "-mr-3"} block bg-[image:url('cust3.png')] bg-cover bg-center`}
            ></span>
          </span>

          <p className="text-mk-blue mr-2 text-3xl font-bold md:text-4xl">
            1.7M+{" "}
          </p>
          <p className="text-sm leading-3.5 text-slate-600 md:text-base">
            Satisfied <br /> Customers
          </p>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
