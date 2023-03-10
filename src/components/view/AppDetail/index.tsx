import "./AppDetail.css";
import PortfolioDatas from "src/feature/portfolioData";
import { useDispatch } from "react-redux";
import { selectPortfolio } from "src/redux/selectPortfolioSlice";
import CloseButton from "src/components/common/CloseButton";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const AppDetail = () => {
  const dispatch = useDispatch();
  const portfolioNumber = Number(useParams().appId);

  const portfolioData = PortfolioDatas[portfolioNumber];

  // useEffect内でreduxの値を更新することでレンダリング中に値を更新するのを防ぐ
  // reduxを更新してしまうとレンダリング中に親要素の状態を変更することになり警告が出る
  useEffect(() => {
    dispatch(selectPortfolio(portfolioNumber));
  }, []);

  // undefindの場合
  // portfolioNumberが文字列の場合や、番号がPortfolioDatasにない場合はundefindとなる
  if (!portfolioData) {
    return <CloseButton path="/portfolio" />;
  }

  // react-router-domを使用してページ遷移するとスクロール量が保持される。
  // aタグなどのリダイレクトはリセットされる。
  window.scrollTo(0, 0); // topへスクロール

  return (
    <div className="portfolio-detatil">
      <CloseButton path="/portfolio" />

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

export default AppDetail;
