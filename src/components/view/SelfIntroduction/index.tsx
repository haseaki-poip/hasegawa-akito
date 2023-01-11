import Headline from "src/components/common/Headline";
import myImage from "src/assets/images/hasegawa.png";
import "./SelfIntroduction.css";

const SelfIntroduction = () => {
  return (
    <div id="about">
      <Headline headlineName="about" />
      <div className="introduction-content">
        <div className="my-image">
          <img src={myImage} alt="myImage" />
        </div>
        <div className="self-introduction">a</div>
      </div>
    </div>
  );
};

export default SelfIntroduction;
