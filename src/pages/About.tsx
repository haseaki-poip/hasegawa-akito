import Header from "src/components/common/Header";
import Hobby from "src/components/view/Hobby";
import SelfIntroduction from "src/components/view/SelfIntroduction";

const About = () => {
  return (
    <div>
      <SelfIntroduction />
      <Header pageName="about" />
      <Hobby />
    </div>
  );
};

export default About;
