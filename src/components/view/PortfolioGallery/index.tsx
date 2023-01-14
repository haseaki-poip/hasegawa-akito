import "./PortfolioGallery.css";
import portfolioImg from "src/assets/images/E-SInt.png";
import useScroll from "src/components/hooks/useScroll";

const PortfolioGallery = () => {
  const scrollPosition = useScroll();
  const transformStyle = (() => {
    if (scrollPosition <= 3200) {
      return {
        transform: `translateY(${scrollPosition}px)`,
      };
    } else {
      return {
        transform: "translateY($3200px)",
      };
    }
  })();

  console.log(scrollPosition);
  return (
    <div className="portfolio-content">
      <div className="portfolio" style={transformStyle}>
        <img src={portfolioImg} alt="portfolioImage" />
        <div className="portfolio-introduction">
          <h2>E-SInt</h2>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery;
