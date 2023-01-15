import "./PortfolioGallery.css";
import portfolioImg from "src/assets/images/E-SInt.png";
import useScroll from "src/components/hooks/useScroll";

const PortfolioGallery = () => {
  const scrollPosition = useScroll();
  const portfolioStyle = (() => {
    const scroll_in_span = scrollPosition % 1000;
    if (scroll_in_span <= 300) {
      const opacity = 1 - (300 - scroll_in_span) / 300;
      return {
        opacity: `${opacity}`,
      };
    } else if (scroll_in_span >= 700) {
      const opacity = 1 - (scroll_in_span - 700) / 300;
      return {
        opacity: `${opacity}`,
      };
    }
  })();

  console.log(scrollPosition);
  return (
    <div className="portfolio-content">
      <div className="portfolio" style={portfolioStyle}>
        <img src={portfolioImg} alt="portfolioImage" />
        <div className="portfolio-introduction">
          <h2>E-SInt</h2>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery;
