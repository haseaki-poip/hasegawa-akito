import type { PortfolioDataType } from "src/feature/type";
import "./PortfolioDetail.css";

type Props = {
  portfolioData: PortfolioDataType;
};

const PortfolioDetail = ({ portfolioData }: Props) => {
  return (
    <div className="portfolio-detatil">
      <div className="modal"></div>
    </div>
  );
};

export default PortfolioDetail;
