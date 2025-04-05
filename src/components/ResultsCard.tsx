import CountUp from 'react-countup';


const ResultsCard = ({
  text,
  number,
  paragraph,
  character,
}: {
  text: string;
  number: string;
  character: string;
  paragraph: string;
}) => {

const numericalValue = parseInt(number)
  
  return (
    <div className="rounded-xl bg-white p-5">
      <p className="mb-10">• {text}</p>

      <h4 className="mb-3 text-4xl font-medium sm:text-5xl">
       <CountUp  enableScrollSpy scrollSpyOnce end={numericalValue}  duration={1}/>
        {character}
      </h4>
      <p className="text-xs  font-light md:pr-6">
        {paragraph} 
      </p>
    </div>
  );
};

export default ResultsCard;
