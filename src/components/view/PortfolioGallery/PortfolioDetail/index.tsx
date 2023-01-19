import type { PortfolioDataType } from "src/feature/type";
import "./PortfolioDetail.css";

type Props = {
  portfolioData: PortfolioDataType;
};

const PortfolioDetail = ({ portfolioData }: Props) => {
  return (
    <div className="portfolio-detatil">
      <button>詳細を見る</button>
    </div>
  );
};

export default PortfolioDetail;
