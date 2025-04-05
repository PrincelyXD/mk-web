const TestimonialCard = ({
  name,
  feedback,
}: {
  name: string;
  feedback: string;
}) => {
  return (
    <div className="w-ful font-mona shadow-custom flex max-w-[500px] flex-col gap-y-3 rounded-xl bg-white p-7">
      <span className="text-[12px] font-light">“{feedback}”</span>
      <span className="text-xl">{name}</span>
    </div>
  );
};

export default TestimonialCard;
