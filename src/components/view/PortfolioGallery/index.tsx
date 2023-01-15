import "./PortfolioGallery.css";
import useScroll from "src/components/hooks/useScroll";
import PortfolioContent from "./PortfolioContent";
import PortfolioDatas from "src/feature/portfolioData";

const span = 1000; // ポートフォリオひとつにつきスパンは1000px
const fadeInStart = span * 0.3;
const fadeOutStart = span - fadeInStart;
const maxScroll = PortfolioDatas.length * span;

const PortfolioGallery = () => {
  const scrollPosition = useScroll();

  // ポートフォリオの数に応じてcontentの高さが変わる
  const portfolioContentStyle = {
    height: `calc(${maxScroll}px + 75vh)`,
  };

  const portfolioFadeStyle = (() => {
    const scroll_in_span = scrollPosition % span;

    if (scroll_in_span <= fadeInStart) {
      const opacity = 1 - (fadeInStart - scroll_in_span) / fadeInStart;
      const translateY = ((fadeInStart - scroll_in_span) / fadeInStart) * 100;
      return {
        opacity: `${opacity}`,
        transform: `translateY(${translateY}px)`,
      };
    } else if (scroll_in_span >= fadeOutStart) {
      const opacity = 1 - (scroll_in_span - fadeOutStart) / fadeInStart;
      const translateY = ((scroll_in_span - fadeOutStart) / fadeInStart) * 100;
      return {
        opacity: `${opacity}`,
        transform: `translateY(${translateY}px)`,
      };
    }
  })();

  const selectPortfolioNumber = (scrollPosition: number) => {
    return Math.floor(scrollPosition / span); // 切り捨て
  };

  console.log(scrollPosition);

  return (
    <div className="portfolio-content" style={portfolioContentStyle}>
      {scrollPosition <= maxScroll ? (
        <div className="portfolio-fade-content" style={portfolioFadeStyle}>
          <PortfolioContent
            portfolioNumber={selectPortfolioNumber(scrollPosition)}
          />
        </div>
      ) : null}
    </div>
  );
};

export default PortfolioGallery;
