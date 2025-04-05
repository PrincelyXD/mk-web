import ServiceCard from "../../components/ServiceCard";
import image1 from "../../assets/ui/webagency.svg";
import image2 from "../../assets/ui/webdev.svg";
import image3 from "../../assets/ui/digital.svg";
import featImg1 from "../../assets/ui/blogmk.svg";
import featImg2 from "../../assets/ui/smilemk.svg";
import BlueServiceCard from "../../components/BlueServiceCard";
import FeaturesCard from "../../components/FeaturesCard";
const ServicesSection = () => {
  return (
    <div className="flex w-full flex-col items-center gap-y-20 py-15">
      <section className="flex w-[90%] max-w-[1050px] flex-col justify-center gap-y-7 sm:flex-row sm:items-center">
        <p className="text-mk-blue -mt-10 text-xl font-semibold underline sm:w-[300px]">
          Who we are{" "}
        </p>

        <span className="w-full max-w-[500px]">
          <h2 className="text-mk-blue mb-2 pr-7 text-3xl sm:text-4xl md:text-5xl">
            Your partners for digital success
          </h2>
          <p className="font-mona text-sm text-slate-600 sm:text-base">
            Wer'e a team of expert designers, web developers and marketers
            who've been delivering digital success for more than a decade. We
            excel at marketing websites, innovative web apps and mobile
            applications.
          </p>
        </span>
      </section>

      <section className="x grid w-[90%] max-w-[1100px] grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ServiceCard
          image={`${image1}`}
          header="Web Design Agency"
          paragraph="As a leading web design and digital agency, our design and
        development specialists take all measure to ensure your website works
        like no other"
        />
        <ServiceCard
          image={`${image2}`}
          header="CRM & API Integration"
          paragraph="We connect your business with smart CRM systems and seamless API integrations, empowering your tools to work in sync, automate tasks, and deliver a smoother, more efficient workflow."
        />
        <ServiceCard
          image={`${image3}`}
          header="Digital Marketing"
          paragraph="Our digital marketing experts craft data-driven strategies that elevate your brand, increase visibility, and drive real engagement across all platforms."
        />

        <BlueServiceCard />
      </section>

      <section className="bg-mk-blue flex w-full flex-col items-center px-5 py-10">
        <div className="mb-15 flex w-[90%] flex-col gap-x-7 gap-y-3 md:flex-row md:pl-5 lg:w-[95%]">
          <h2 className="mb-2 max-w-[500px] text-3xl text-white sm:pr-7 sm:text-4xl md:text-5xl">
            Take charge steering your product
          </h2>
          <p className="font-mona xs:max-w-[230px] h-fit w-full text-sm text-white sm:self-end">
            Our ability to contribute expertise and system thinking is what
            fuels us as a team
          </p>
        </div>

        <div className="flex w-[90%] flex-wrap justify-center gap-5 md:justify-start lg:w-[95%]">
          <FeaturesCard
            image={featImg1}
            header="Dedicated"
            paragraph="Find the best fit engineers led by senior, seasoned and skilled tech-leads"
          />
          <FeaturesCard
            image={featImg1}
            header="Product"
            paragraph="Get top-notch service from an experienced Product Design Management team"
          />
          <FeaturesCard
            image={featImg2}
            header="End-to-End"
            paragraph="Hire an elitesquad of leading professionals to turn your ideas into a ready-to-market product"
          />
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
