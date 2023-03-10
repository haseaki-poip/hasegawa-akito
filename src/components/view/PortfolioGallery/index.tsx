import "./PortfolioGallery.css";
import useScroll from "src/components/hooks/useScroll";
import PortfolioContent from "./PortfolioContent";
import PortfolioDatas from "src/feature/portfolioData";
import BackMoveObject from "src/components/common/BackMoveObject";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";

const span = 1300; // ポートフォリオひとつにつきスパンは1000px
const gap = 300; // 各ポートフォリオが出現するまでの間隔
const fadeInFinish = (span - gap) * 0.2 + gap;
const fadeOutStart = span - (span - gap) * 0.2;
const maxScroll = PortfolioDatas.length * span - 10;
const PortfolioGallery = () => {
  const scrollPosition = useScroll();
  const portfolioNumber = useSelector(
    (state: RootState) => state.selectPortfolio.id
  );

  // 詳細ページから戻ってきた場合、詳細ボタンを押したページの位置で表示させる
  useEffect(() => {
    if (portfolioNumber === -1) return;

    const position = fadeOutStart + portfolioNumber * span;

    window.scrollTo(0, position);
  }, [portfolioNumber]);

  // ポートフォリオの数に応じてcontentの高さが変わる
  const portfolioContentStyle = {
    height: `calc(${maxScroll}px + 90vh)`,
  };

  const portfolioFadeStyle = (() => {
    const scroll_in_span = (scrollPosition % span) - gap; // 各ポートフォリオにおけるスクロール量

    if (scroll_in_span < 0) {
      return {
        opacity: "0",
        transform: "translateY(0px)",
      };
    }

    if (scroll_in_span <= fadeInFinish - gap) {
      const opacity =
        1 - (fadeInFinish - gap - scroll_in_span) / (fadeInFinish - gap);
      const translateY =
        ((fadeInFinish - gap - scroll_in_span) / (fadeInFinish - gap)) * 200;
      return {
        opacity: `${opacity}`,
        transform: `translateY(${translateY}px)`,
      };
    }

    if (scroll_in_span >= fadeOutStart - gap) {
      const opacity =
        1 - (scroll_in_span + gap - fadeOutStart) / (fadeInFinish - gap);
      const translateY =
        ((scroll_in_span + gap - fadeOutStart) / (fadeInFinish - gap)) * 200;
      return {
        opacity: `${opacity}`,
        transform: `translateY(${translateY}px)`,
      };
    }
  })();

  const selectPortfolioNumber = (scrollPosition: number) => {
    if (scrollPosition < 0) return 0;
    return Math.floor(scrollPosition / span); // 切り捨て
  };

  // スクロールサインを上向きか下向きか非表示かのcss classを割り当て
  const scrollSignClassName = (() => {
    if (scrollPosition === 0) return "scroll-up-sign";
    if (scrollPosition > maxScroll + 100) return "scroll-down-sign";
    return "";
  })();

  return (
    <div className="portfolio-content" style={portfolioContentStyle}>
      <div
        className="overview"
        style={{ display: scrollPosition === 0 ? "block" : "none" }}
      >
        <h2>私が開発したアプリケーションの紹介ページです。</h2>
      </div>
      <div className={"scroll-sign " + scrollSignClassName}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <g>
            <path
              d="M395.773,225.883c-33.466,36.809-42.561,44.202-42.561,44.202c-6.183,5.902-15.278,7.543-23.136,4.183
		c-7.849-3.368-12.945-11.085-12.945-19.627V36.808l-0.509,0.044C313.421,15.988,295.39,0,273.623,0
		c-24.022,0-43.5,19.478-43.5,43.508v120.467l-122.282,49.323c-36.414,15.611-54.69,56.585-41.982,94.104l46.64,141.023V512h211.324
		v-63.575c0,0,109.214-164.772,120.467-180.717C464.373,239.275,429.231,189.075,395.773,225.883z"
            ></path>
          </g>
        </svg>
      </div>

      {scrollPosition <= maxScroll ? (
        <div>
          <BackMoveObject />

          <div className="portfolio-fade-content" style={portfolioFadeStyle}>
            <PortfolioContent
              portfolioNumber={selectPortfolioNumber(scrollPosition)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PortfolioGallery;
