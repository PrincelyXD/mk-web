

const FeaturesCard = ({
    image,
    header,
    paragraph,
  }: {
    image: string;
    header: string;
    paragraph: string;
  }) => {
  return (
    <div className=" pr-10 pb-10 w-[365px]
     items-center md:items-start text-center
    md:text-start
    font-mona hover:scale-[1.05] text-white  flex flex-col
      transition-transform duration-500 rounded-xl  p-5">
      <span>
        {" "}
        <img className="mb-5 h-10  " src={image} alt="service-icon" />
      </span>
      <h4 className="text-2xl sm:text-3xl mb-3 font-medium">{header} <br /> Team</h4>
      <p className=" md:pr-6 text-xs sm:text-sm">
        {paragraph}
      </p>
    </div>
  )
}

export default FeaturesCard
