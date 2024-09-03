import { SKILLS_DATA } from "../../dataSheet";
import { Header } from "./../header";
import Tab from "./../Tab/tab";

const Skills = () => {
  return (
    <>
      <Header header="My Skills" />
      <Tab categories={SKILLS_DATA} />
    </>
  );
};

export default Skills;
