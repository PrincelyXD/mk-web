import ResultsCard from "../../components/ResultsCard";

const ResultsSection = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <section className="flex w-[90%] flex-col justify-center gap-y-7 pt-7 sm:flex-row sm:items-center lg:w-[95%]">
        <p className="text-mk-blue -mt-10 text-xl font-semibold underline sm:w-[300px]">
          Why choose us
        </p>

        <span className="w-full max-w-[500px]">
          <h2 className="text-mk-blue mb-2 pr-7 text-3xl sm:text-4xl md:text-5xl">
            Results that we successfully deliver
          </h2>
        </span>
      </section>

      <section className="font-mona flex w-[90%] justify-center pt-3 pb-20 lg:w-[95%]">
        <div className="grid w-full max-w-[850px] grid-cols-1 grid-rows-2 gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
          <div className="rounded-xl bg-[image:url('/rectangle_10.jpg')] bg-cover"></div>
          <ResultsCard
            text="projects completed"
            character="+"
            number="475"
            paragraph="Over 400 successful projects delivered to our clients
        worldwide"
          />

          <div className="hidden rounded-xl bg-[image:url('/rectangle_12.jpg')] bg-cover bg-center sm:row-span-2 sm:block"></div>

          <ResultsCard
            text="satisfied customers"
            character="%"
            number="98"
            paragraph="A 98% satisfaction rate across all our consulting services"
          />
          <ResultsCard
            text="hours saved"
            character="+"
            number="843k"
            paragraph="Our efficiency strategies have saved clients over 800,000 hours collectively"
          />
        </div>
      </section>
    </div>
  );
};

export default ResultsSection;
