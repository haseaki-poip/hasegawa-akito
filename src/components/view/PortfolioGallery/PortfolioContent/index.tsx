import "./PortfolioContent.css";
import PortfolioDatas from "src/feature/portfolioData";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  portfolioNumber: number;
};

const PortfolioContent = memo<Props>(({ portfolioNumber }) => {
  const portfolioData = PortfolioDatas[portfolioNumber];
  const navigate = useNavigate();

  return (
    <>
      <div className="portfolio">
        <img src={portfolioData.portfolio_img} alt="portfolioImage" />
        <div className="portfolio-introduction">
          <h2>{portfolioData.portfolio_name}</h2>
          <p>{portfolioData.portfolio_introduction}</p>
          <button onClick={() => navigate("/myApp/" + portfolioNumber)}>
            詳細を見る
          </button>
        </div>
      </div>
    </>
  );
});

export default PortfolioContent;
