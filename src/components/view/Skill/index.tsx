import Headline from "src/components/common/Headline";
import "./Skill.css";
import { skillDatas } from "src/feature/skillDatas";

const Skill = () => {
  return (
    <div id="skill">
      <Headline headlineName="skill" />
      <div className="skill-content">
        <div className="skill-slide">
          {skillDatas.map((skillData, key) => {
            return (
              <div key={key} className="skill">
                <img
                  src={skillData.img_url}
                  width={`${skillData.width}`}
                  height={`${skillData.height}`}
                  alt="スキルアイコン"
                />
                <h2>{skillData.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;
