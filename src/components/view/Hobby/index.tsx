import Headline from "src/components/common/Headline";
import "./Hobby.css";
import leftImage from "src/assets/images/car.png";
import centerImage from "src/assets/images/snowboard.png";
import rightImage from "src/assets/images/hackathon.png";

const Hobby = () => {
  return (
    <div id="hobby">
      <Headline headlineName="hobby" />
      <div className="hobby-gallery">
        <div className="hobby-img first-left-img">
          <img src={leftImage} alt="hobbyImage" />
        </div>
        <div className="hobby-img first-center-img">
          <img src={centerImage} alt="hobbyImage" />
        </div>
        <div className="hobby-img first-right-img">
          <img src={rightImage} alt="hobbyImage" />
        </div>
      </div>
    </div>
  );
};

export default Hobby;
