import Headline from "src/components/common/Headline";
import "./Hobby.css";
import leftImage from "src/assets/images/car.png";
import centerImage from "src/assets/images/snowboard.png";
import rightImage from "src/assets/images/hackathon.png";
import { useState } from "react";

const centerImgNumber = 1;
const lastImgNumber = 2;
const Hobby = () => {
  const [slideSituation, setSlideSituation] = useState({
    animationStartImgNumber: 1,
    nowImgNumber: 1,
    animationName: "",
  });

  const leftSlide = () => {
    if (slideSituation.nowImgNumber === lastImgNumber) return;
    setSlideSituation({
      ...slideSituation,
      animationStartImgNumber: slideSituation.nowImgNumber,
      nowImgNumber: slideSituation.nowImgNumber + 1,
      animationName: "slide-animation-" + (slideSituation.nowImgNumber + 1),
    });
  };
  const rightSlide = () => {
    if (slideSituation.nowImgNumber === 0) return;
    setSlideSituation({
      ...slideSituation,
      animationStartImgNumber: slideSituation.nowImgNumber,
      nowImgNumber: slideSituation.nowImgNumber - 1,
      animationName: "slide-animation-" + (slideSituation.nowImgNumber - 1),
    });
  };

  return (
    <div id="hobby">
      <Headline headlineName="hobby" />
      <div className="background-object">
        <div className="object" id="object1"></div>
        <div className="object" id="object2"></div>
      </div>
      <div className="hobby-gallery">
        {slideSituation.nowImgNumber !== 0 ? (
          <div className="arrow" onClick={() => rightSlide()}>
            <svg
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  className="st0"
                  d="M256,0C114.623,0,0,114.616,0,256s114.623,256,256,256c141.391,0,256-114.616,256-256S397.391,0,256,0z
		 M378.268,287.116c0,8.666-7.028,15.68-15.68,15.68h-89.334l10.898,46.623c1,4.312-0.71,8.798-4.332,11.348
		c-3.61,2.551-8.421,2.638-12.131,0.24l-131.913-95.225c-3.145-2.276-5-5.913-5-9.783s1.855-7.514,5-9.783l131.913-95.231
		c3.71-2.399,8.521-2.305,12.131,0.246c3.622,2.55,5.333,7.036,4.332,11.348l-10.898,46.623h89.334c8.652,0,15.68,7.014,15.68,15.68
		V287.116z"
                ></path>
              </g>
            </svg>
          </div>
        ) : null}

        <style>
          {/* animation名も動的に変化させないとanimationが変化されたことにならない */}
          {`
            @keyframes slide-animation-${slideSituation.nowImgNumber} {
              0% {
                transform: translateX(${
                  (centerImgNumber - slideSituation.animationStartImgNumber) *
                  62
                }vw);
              }
              100% {
                transform: translateX(${
                  (centerImgNumber - slideSituation.nowImgNumber) * 62
                }vw);
              }
            }
          `}
        </style>
        <div
          id="slide"
          className="slide-area"
          style={{
            animationName: slideSituation.animationName,
          }}
        >
          <div className="hobby-img left-img">
            <img src={leftImage} alt="hobbyImage" />
          </div>
          <div className="hobby-img center-img">
            <img src={centerImage} alt="hobbyImage" />
          </div>
          <div className="hobby-img right-img">
            <img src={rightImage} alt="hobbyImage" />
          </div>
        </div>

        {slideSituation.nowImgNumber !== lastImgNumber ? (
          <div className="arrow" onClick={() => leftSlide()}>
            <svg
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
            >
              <g>
                <path
                  className="st0"
                  d="M256,0C114.608,0,0,114.616,0,256s114.608,256,256,256c141.376,0,256-114.616,256-256S397.376,0,256,0z
		 M376.224,265.783l-131.912,95.231c-3.71,2.399-8.522,2.305-12.131-0.246c-3.623-2.55-5.333-7.036-4.333-11.348l10.898-46.623
		h-89.334c-8.652,0-15.681-7.014-15.681-15.68v-62.233c0-8.666,7.028-15.68,15.681-15.68h89.334l-10.898-46.623
		c-1-4.312,0.71-8.798,4.333-11.348c3.609-2.551,8.42-2.638,12.131-0.24l131.912,95.225c3.146,2.276,5.001,5.913,5.001,9.783
		S379.37,263.514,376.224,265.783z"
                ></path>
              </g>
            </svg>
          </div>
        ) : null}
      </div>
      <div className="hobby-introduction">
        <div
          className="hobby-sentence"
          style={{ opacity: slideSituation.nowImgNumber === 0 ? "1" : "0" }}
        >
          <h2>drive</h2>
          <p>
            私の愛車のMR-Sです!二人乗りのオープンカーで、人馬一体のような感覚でドライブを楽しめます。
          </p>
        </div>
        <div
          className="hobby-sentence"
          style={{ opacity: slideSituation.nowImgNumber === 1 ? "1" : "0" }}
        >
          <h2>snow board</h2>
          <p>
            自分で車を出してスノボーしに行きます！写真はカッコつけていますがこのあと着地で転びます。
          </p>
        </div>
        <div
          className="hobby-sentence"
          style={{ opacity: slideSituation.nowImgNumber === 2 ? "1" : "0" }}
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
