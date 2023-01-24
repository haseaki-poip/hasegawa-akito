import "./PortfolioContent.css";
import PortfolioDatas from "src/feature/portfolioData";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectPortfolio } from "src/redux/selectPortfolioSlice";

type Props = {
  portfolioNumber: number;
};

const PortfolioContent = memo<Props>(({ portfolioNumber }) => {
  const portfolioData = PortfolioDatas[portfolioNumber];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showDetail = () => {
    dispatch(selectPortfolio(portfolioNumber));
    navigate("/myApp/" + portfolioNumber);
  };

  return (
    <>
      <div className="portfolio">
        <img src={portfolioData.portfolio_img} alt="portfolioImage" />
        <div className="portfolio-introduction">
          <h2>{portfolioData.portfolio_name}</h2>
          <p>{portfolioData.portfolio_introduction}</p>
          <button onClick={() => showDetail()}>詳細を見る</button>
        </div>
      </div>
    </>
  );
});

export default PortfolioContent;
