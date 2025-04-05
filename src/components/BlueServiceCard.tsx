import cardImage from "/image_8.png"

const BlueServiceCard = () => {
  return (
    <div className=" pr-10 pb-10 overflow-hidden h-[300px] md:h-full
    lg:hover:scale-[1.1] hover:scale-[1.05] 
    transition-transform duration-500 divide-neutral- font-mona relative
     rounded-xl text-white p-5 flex flex-col bg-mk-blue">
      <span className="text-sm mb-4">
     • Need help
      </span>
      <span className="text-2xl leading-5">Free advice.</span>
      <span className="text-2xl">Book a callback</span>
     <img className="absolute h-56 -bottom-1 right-8" src={cardImage} alt="" />
    </div>
  )
}

export default BlueServiceCard
