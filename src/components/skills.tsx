import { SKILLS_DATA } from "../dataSheet";
import { Header } from "./reusable/header";
import Tab from "./reusable/Tab/tab";

const Skills = () => {
  return (
    <>
      <Header header="My Skills" />
      <Tab categories={SKILLS_DATA} />
    </>
  );
};

export default Skills;
