import Headline from "src/components/common/Headline";
import "./Hobby.css";
import leftImage from "src/assets/images/car.png";
import centerImage from "src/assets/images/snowboard.png";
import rightImage from "src/assets/images/hackathon.png";
import { useState } from "react";

const Hobby = () => {
  const [nowSlideClassList, setNowSlideClassList] = useState([
    "left",
    "center",
    "right",
  ]);
  const leftSlide = () => {
    const endNowItem = nowSlideClassList[2];
    const stateNowArray = nowSlideClassList.slice(0, -1);
    stateNowArray.unshift(endNowItem);

    setNowSlideClassList(stateNowArray);
  };
  const rightSlide = () => {
    const headNowItem = nowSlideClassList[0];
    const stateNowArray = nowSlideClassList.slice(1);
    stateNowArray.push(headNowItem);

    setNowSlideClassList(stateNowArray);
  };
  return (
    <div id="hobby">
      <Headline headlineName="hobby" />
      <div className="background-object">
        <div className="object" id="object1"></div>
        <div className="object" id="object2"></div>
      </div>
      <div className="hobby-gallery">
        <div className="arrow" onClick={() => leftSlide()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g>
              <polygon points="277.919,132.921 154.839,256 277.919,379.072 318.552,338.438 236.122,256 318.552,173.562 	"></polygon>
              <path
                d="M256.008,0C114.605,0.016,0.016,114.606,0,256c0.015,141.394,114.605,255.984,256.008,256
		C397.394,511.984,511.983,397.394,512,256C511.983,114.606,397.394,0.016,256.008,0z M408.585,408.585
		c-39.11,39.079-92.93,63.189-152.577,63.205c-59.655-0.016-113.483-24.126-152.594-63.205C64.328,369.475,40.217,315.647,40.21,256
		c0.007-59.654,24.118-113.474,63.204-152.585c39.111-39.086,92.939-63.197,152.594-63.205
		c59.646,0.008,113.466,24.119,152.577,63.205c39.079,39.11,63.197,92.93,63.205,152.585
		C471.782,315.647,447.664,369.475,408.585,408.585z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="slide-area">
          <div className={"hobby-img " + nowSlideClassList[0] + "-img"}>
            <img src={leftImage} alt="hobbyImage" />
          </div>
          <div className={"hobby-img " + nowSlideClassList[1] + "-img"}>
            <img src={centerImage} alt="hobbyImage" />
          </div>
          <div className={"hobby-img " + nowSlideClassList[2] + "-img"}>
            <img src={rightImage} alt="hobbyImage" />
          </div>
        </div>

        <div className="arrow" onClick={() => rightSlide()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g>
              <polygon points="193.447,173.562 275.877,256 193.447,338.438 234.081,379.08 357.161,256 234.081,132.928 	"></polygon>
              <path
                d="M255.992,0C114.606,0.015,0.015,114.606,0,256c0.015,141.394,114.606,255.984,255.992,256
		C397.394,511.984,511.985,397.394,512,256C511.985,114.606,397.394,0.015,255.992,0z M408.585,408.585
		c-39.118,39.079-92.938,63.189-152.593,63.205c-59.647-0.016-113.467-24.126-152.577-63.205
		C64.328,369.474,40.218,315.647,40.21,256c0.008-59.655,24.118-113.475,63.205-152.585c39.11-39.087,92.93-63.197,152.577-63.205
		c59.655,0.008,113.476,24.118,152.593,63.205c39.087,39.11,63.197,92.93,63.205,152.585
		C471.782,315.647,447.672,369.474,408.585,408.585z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="hobby-introduction">
        <div
          className="hobby-sentence"
          style={{ opacity: nowSlideClassList[0] === "center" ? "1" : "0" }}
        >
          <h2>drive</h2>
          <p>
            私の愛車のMR-Sです!二人乗りのオープンカーで、人馬一体のような感覚でドライブを楽しめます。
          </p>
        </div>
        <div
          className="hobby-sentence"
          style={{ opacity: nowSlideClassList[1] === "center" ? "1" : "0" }}
        >
          <h2>snow board</h2>
          <p>
            自分で車を出してスノボーしに行きます！写真はカッコつけていますがこのあと着地で転びます。
          </p>
        </div>
        <div
          className="hobby-sentence"
          style={{ opacity: nowSlideClassList[2] === "center" ? "1" : "0" }}
        >
          <h2>hackathon</h2>
          <p>
            JPHACKSに出場し、決勝16チームに選出されました!素晴らしいチームがたくさんあり勉強になりました。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
