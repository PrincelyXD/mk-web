import ProjectsCard from "../../components/ProjectsCard";

import project1 from "/proj1.png";
import project2 from "/proj2.png";
import project3 from "/proj3.png";
import project4 from "/proj4.png";
import project5 from "/proj5.png";
import project6 from "/proj6.png";

const Projects = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <section className="flex w-[90%] flex-col justify-center gap-x-3 gap-y-4 pt-7 sm:flex-row sm:items-center sm:gap-y-7 lg:w-[95%]">
        <p className="text-mk-blue -mt-10 text-xl font-semibold underline sm:w-[300px]">
          Selected works
        </p>

        <span className="w-full max-w-[400px]">
          <h2 className="text-mk-blue mb-2 pr-7 text-3xl sm:text-4xl md:text-5xl">
            Our finished projects
          </h2>
        </span>

        <span className="w-full max-w-[200px] text-sm font-light sm:text-right">
          Read how we've helped some of the biggest brands transform their
          business
        </span>
      </section>

      <section className="font-mona relative flex w-[90%] justify-center pt-16 pb-20 md:pt-20 lg:w-[95%]">
        <img className="absolute top-0 h-full" src="/background.png" alt="" />
        <div className="grid w-full max-w-[1000px] grid-cols-1 grid-rows-2 gap-3 bg-cover bg-center sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
          <ProjectsCard
            image={project1}
            header="Open Fasion"
            className="bg-[#051DAF]"
            paragraph="Mobile development - 2024"
          />
          <ProjectsCard
            image={project6}
            header="Dmytro's corner"
            className="bg-[#4A0E10]"
            paragraph="Web design - 2022"
          />
          <ProjectsCard
            image={project3}
            header="Course Space"
            className="bg-[#526548]"
            paragraph="Mobile development - 2023"
          />
          <ProjectsCard
            image={project4}
            header="Splash Collage"
            className="bg-[#4A0E10]"
            paragraph="Product design - 2022"
          />
          <ProjectsCard
            image={project5}
            header="Lynt Pick"
            className="bg-[#051DAF]"
            paragraph="Web design - 2019"
          />
          <ProjectsCard
            image={project2}
            header="Milan"
            className="bg-[#526548]"
            paragraph="Mobile development - 2025"
          />
        </div>
      </section>
    </div>
  );
};

export default Projects;
