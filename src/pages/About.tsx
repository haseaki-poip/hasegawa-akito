import Header from "src/components/common/Header";
import Hobby from "src/components/view/Hobby";
import SelfIntroduction from "src/components/view/SelfIntroduction";
import Skill from "src/components/view/Skill";

const About = () => {
  return (
    <div>
      <SelfIntroduction />
      <Header pageName="about" />
      <Skill />
      <Hobby />
    </div>
  );
};

export default About;
