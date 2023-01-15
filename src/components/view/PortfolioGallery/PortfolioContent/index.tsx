import "./PortfolioContent.css";
import PortfolioDatas from "src/feature/portfolioData";
import { memo } from "react";

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
      </div>
    </div>
  );
});

export default PortfolioContent;
