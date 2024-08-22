// useScrollToSection.ts
import { scroller } from "react-scroll";

const useScrollToSection = () => {
  const scrollToSection = (sectionId: string) => {
    scroller.scrollTo(sectionId, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -100,
    });
  };

  return scrollToSection;
};

export default useScrollToSection;
