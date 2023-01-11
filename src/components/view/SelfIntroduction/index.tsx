import Headline from "src/components/common/Headline";
import myImage from "src/assets/images/hasegawa.png";
import "./SelfIntroduction.css";

const SelfIntroduction = () => {
  return (
    <div id="about">
      <Headline headlineName="about" />
      <div className="introduction-content">
        <div className="my-image">
          <div className="flex-column-center">
            <img src={myImage} alt="myImage" />
            <h2>Engineer</h2>
          </div>
        </div>
        <div className="self-introduction">
          <h1>長谷川 祥士</h1>
          <h3>所属: 名古屋工業大学大学院</h3>
          <h3>趣味: スノボー, ドライブ, アプリ開発</h3>
          <p>
            webアプリ開発を勉強しており、ハッカソンに出場し入賞することを目標としています。
            <span>UI</span> <span>UX</span>の向上を心がけ精進しています!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelfIntroduction;
