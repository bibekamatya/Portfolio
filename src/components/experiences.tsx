import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Icon from "./reusable/Icons";
import { Header } from "./reusable/header";
import { EXPERIENCES_DATA } from "../dataSheet";

const Experiences = () => {
  return (
    <>
      <Header header="Experiences" />
      <VerticalTimeline>
        {EXPERIENCES_DATA.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "var(--card-bg-color)", // Using the CSS variable
              color: "var(--text-color)", // Using the CSS variable
              borderBottom: `1px solid var(--theme-color)`, // Using the CSS variable
              boxShadow: "var(--custom-shadow)",
              borderRadius: ".5rem",
            }}
            contentArrowStyle={{
              borderRight: `10px solid var(--arrow-color)`, // Using the CSS variable
              marginTop: "2px",
            }}
            iconStyle={{ backgroundColor: "var(--theme-color)" }}
            // @ts-ignore
            date={
              <span className="items-center">
                <Icon icon="calendar" className="mr-2" />
                {exp.duration}
              </span>
            }
            iconClassName="mt-6 xl:!-ml-[8px] !ml-[11px] !h-4 !w-4"
            dateClassName="text-themeColor !opacity-100"
          >
            <div className="space-y-1 mb-5">
              <h3 className="text-xl font-semibold text-themeColor">
                {exp.role}
              </h3>
              <h6 className="dark:text-gray-300 text-gray-700 dark:font-normal font-semibold">
                {exp.company}, {exp.location}
              </h6>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              {exp.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="dark:text-gray-400 text-gray-700 text-sm"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      {/* 
      <div className="mt-40">
        <Header header="Experiences" />
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="py-3 px-6 rounded-lg relative shadow shadow-sky-900"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              ref={(element) => (refs.current[index] = element)}
              animate={{
                height: isHovered === index ? "auto" : "80px",
                minHeight: isHovered === index ? "200px" : "80px",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className={`text-xl font-semibold text-themeColor`}>
                    {exp.role}
                  </h3>
                  <p className="text-gray-300">
                    {exp.company}, {exp.location}
                  </p>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center">
                  <Icon icon="calendar" className="mr-2" />
                  {exp.duration}
                </span>
              </div>
              <motion.ul
                className="list-disc pl-6 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered === index ? 1 : 0 }} // Animate list items based on hover
                transition={{ duration: 0.3 }}
              >
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-400 text-sm">
                    {detail}
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Experiences;
