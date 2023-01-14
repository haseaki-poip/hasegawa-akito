import Header from "src/components/common/Header";
import Headline from "src/components/common/Headline";
import PortfolioGallery from "src/components/view/PortfolioGallery";

const Portfolio = () => {
  return (
    <div>
      <Header pageName="portfolio" />
      <Headline headlineName="portfolio" />
      <PortfolioGallery />
    </div>
  );
};

export default Portfolio;
