import "./Headline.css";
const Headline = ({ headlineName }: { headlineName: string }) => {
  return (
    <div className="headline">
      <h1>{headlineName}</h1>
    </div>
  );
};

export default Headline;
