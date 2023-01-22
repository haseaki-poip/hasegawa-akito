import "./AppDetail.css";
import PortfolioDatas from "src/feature/portfolioData";

type Props = {
  portfolioNumber: number;
};

const PortfolioDetail = ({ portfolioNumber }: Props) => {
  const portfolioData = PortfolioDatas[portfolioNumber];

  return (
    <div className="portfolio-detatil">
      <a href="/portfolio" className="close">
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          height="48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </a>
      <div className="detail-content">
        <div className="app-introduction">
          <div className="app-introduction-content">
            <h2>{portfolioData.portfolio_name}</h2>
            <p>{portfolioData.portfolio_introduction}</p>
            <p>{portfolioData.sub__introduction}</p>
            <h3>使用技術</h3>
            <p id="frontend">
              <span>frontend</span>: {portfolioData.frontend}
            </p>
            <p id="backend">
              <span>backend</span>: {portfolioData.backend}
            </p>
            <p id="other">
              <span>other</span>: {portfolioData.Other}
            </p>
            <div className="url">
              <a href={portfolioData.githubUrl}>
                <svg
                  fill="gray"
                  viewBox="0 0 24 24"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href={portfolioData.appUrl}>
                <svg
                  fill="gray"
                  viewBox="0 0 512 512"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M464,0H48C21.492,0,0,21.492,0,48v416c0,26.508,21.492,48,48,48h416c26.508,0,48-21.492,48-48V48
		C512,21.492,490.508,0,464,0z M444.664,35c10.492,0,19,8.508,19,19s-8.508,19-19,19s-19-8.508-19-19S434.172,35,444.664,35z
		 M374.164,35c10.492,0,19,8.508,19,19s-8.508,19-19,19s-19-8.508-19-19S363.672,35,374.164,35z M303.664,35
		c10.492,0,19,8.508,19,19s-8.508,19-19,19s-19-8.508-19-19S293.172,35,303.664,35z M472,464c0,4.406-3.586,8-8,8H48
		c-4.414,0-8-3.594-8-8V104h432V464z"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="app-img">
          <img src={portfolioData.portfolio_img} alt="portfolioImage" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
