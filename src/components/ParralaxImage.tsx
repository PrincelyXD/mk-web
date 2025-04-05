import { useRef } from "react"

export interface ParralaxImageInterface {
  className?: string;


  start: number;
  end: number;
}

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion"

const ParralaxImage = ({className, start, end}: ParralaxImageInterface) => {
        const ref = useRef(null)
    const  {scrollYProgress} = useScroll({
        target: ref,
        offset: [`${start}px end`, `${end}px`]
    })

   const opacity = useTransform(scrollYProgress, [0.40, 1], [1, 0])
   const y = useTransform(scrollYProgress, [0.40,1], [start, end])

  //  const scale = useTransform(scrollYProgress, [0.40, 1], [1, 0.55])

   const transform =useMotionTemplate `translateY(${y}px) `
  return (
    <motion.div style={{ transform, opacity}} ref={ref} className={className}>

    </motion.div>
  )
}

export default ParralaxImage
