const ServiceCard = ({
  image,
  header,
  paragraph,
}: {
  image: string;
  header: string;
  paragraph: string;
}) => {
  return (
    <div className="font-mona rounded-xl bg-white p-5 pr-10 pb-10 transition-transform duration-500 hover:scale-[1.05] lg:hover:scale-[1.1]">
      <span>
        {" "}
        <img className="mb-12 h-10" src={image} alt="service-icon" />
      </span>
      <h4 className="mb-5 pr-5 text-2xl font-medium">{header}</h4>
      <p className="text-sm text-slate-600">{paragraph}</p>
    </div>
  );
};

export default ServiceCard;
