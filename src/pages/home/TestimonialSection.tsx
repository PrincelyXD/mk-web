import CustomPillButton from "../../components/CustomPillButton";
import TestimonialCard from "../../components/TestimonialCard";
import { testimonials } from "../../resources/Resources";

const TestimonialSection = () => {
  return (
    <div className="flex w-full flex-col">
      <section className="h-[300px] w-full bg-[image:url('/fixed-bg.jpg')] bg-cover bg-fixed md:h-[400px]" />

      <section className="flex w-full justify-center py-10">
        <div className="flex h-[450px] w-[90%] flex-col justify-between 
        gap-5 overflow-scroll sm:pt-10 sm:flex-row lg:w-[95%]">
          <div className="top-0 max-w-[500px] z-20 pb-5 bg-mk-background sticky sm:w-[45%]">
            <h2 className="text-mk-blue mb-2 pr-7 text-3xl sm:text-4xl md:text-5xl">
              Trusted clients testimonial
            </h2>
            <p className="font-mona mb-5 w-full max-w-[350px] text-sm text-slate-600">
              Today’s consumers rely on digital channels to research products —
              just as we thoroughly research the brands we choose to work with.
            </p>

            <CustomPillButton
              text="Explore Us More"
              className="w-fit md:scale-[1] -ml-3.5 md:ml-0 scale-[0.8] bg-white"
            />
          </div>

          <div className="relative flex flex-col items-center gap-y-4 sm:pb-10 sm:w-[55%]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                feedback={testimonial.feedback}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
