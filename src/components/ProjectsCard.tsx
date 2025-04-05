const ProjectsCard = ({
  image,
  header,
  paragraph,
  className,
}: {
  image: string;
  header: string;
  paragraph: string;
  className: string;
}) => {
  return (
    <div
      className={`font-mona transition-transform hover:scale-[1.05] lg:hover:scale-[1.1] ${className} z-10 overflow-hidden rounded-xl duration-500`}
    >
      <span
        style={{ backgroundImage: `url(${image})` }}
        className={`block h-[230px] w-full rounded-b-2xl bg-cover bg-center`}
      ></span>
      <span className={`${className} block w-full p-5 pt-2 pb-6 text-white`}>
        <h4 className="mb-1 text-xl font-medium">{header}</h4>
        <p className="text-xs">{paragraph}</p>
      </span>
    </div>
  );
};

export default ProjectsCard;
