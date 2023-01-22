import Headline from "src/components/common/Headline";
import AppDetail from "src/components/view/AppDetail";

const MyApp = () => {
  return (
    <div>
      <Headline headlineName="Detail" />
      <AppDetail portfolioNumber={0} />
    </div>
  );
};

export default MyApp;
