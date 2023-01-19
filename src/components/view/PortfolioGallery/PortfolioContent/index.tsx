import "./PortfolioContent.css";
import PortfolioDatas from "src/feature/portfolioData";
import { memo } from "react";
import PortfolioDetail from "../PortfolioDetail";

type Props = {
  portfolioNumber: number;
};

const PortfolioContent = memo<Props>(({ portfolioNumber }) => {
  const portfolioData = PortfolioDatas[portfolioNumber];
  return (
    <div className="portfolio">
      <img src={portfolioData.portfolio_img} alt="portfolioImage" />
      <div className="portfolio-introduction">
        <h2>{portfolioData.portfolio_name}</h2>
        <p>{portfolioData.portfolio_introduction}</p>
      </div>
      <PortfolioDetail portfolioData={portfolioData} />
    </div>
  );
});

export default PortfolioContent;
