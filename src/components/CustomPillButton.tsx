import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { useState } from 'react';

const CustomPillButton = ({text, className}:{text:string, className:string}) => {
     const [isFocused, setIsFocused] = useState(false)

  return (
<div
onMouseEnter={()=> setIsFocused(true)}
onMouseLeave={()=> setIsFocused(false)}
className={`h-fit flex overflow-hidden ${className}
 cursor-pointer items-center font-medium
   rounded-xl relative  
   text-xs lg:text-sm px-2 pr-4 py-1.5`}>
 <span className={` w-10 h-9 rounded-xl
     absolute transition-transform duration-500
      bg-mk-blue ${isFocused && "scale-[7.5]" }  `}></span>

<span className=" flex p-[5px] px-2 mr-3 justify-center items-center
 bg-red-200
   rounded-xl">
        
       <span className='animate-pulse text-white'><PlayArrowRoundedIcon /></span> 
      </span>

 <span 
 className={`z-10 transition-colors duration-500 ${isFocused? "text-white":"text-slate-600"}`}>
     {text}</span>
    </div>
  )
}

export default CustomPillButton
