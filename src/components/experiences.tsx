import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Icon from "./reusable/Icons";
import { Header } from "./reusable/header";
import { EXPERIENCES_DATA } from "../dataSheet";

const Experiences = () => {
  const skyBlue = "#0ef";

  return (
    <>
      <Header header="Experiences" />
      <VerticalTimeline>
        {EXPERIENCES_DATA.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "transparent",
              color: "black",
              borderBottom: `1px solid ${skyBlue}`,
              boxShadow: "0 12px 24px rgba(0, 0, 0, 0.9)",
              borderRadius: "1.1rem",
            }}
            contentArrowStyle={{
              borderRight: `10px solid #1b2a47`,
              marginTop: "2px",
            }}
            iconStyle={{ backgroundColor: skyBlue }}
            // @ts-ignore
            date={
              <span className="items-center">
                <Icon icon="calendar" className="mr-2" />
                {exp.duration}
              </span>
            }
            iconClassName="mt-6 xl:!-ml-[8px] !ml-[11px] !h-4 !w-4"
            dateClassName="text-skyBlue !opacity-100"
          >
            <div className="space-y-1 mb-5">
              <h3 className="text-xl font-semibold text-skyBlue">{exp.role}</h3>
              <h6 className="text-gray-300">
                {exp.company}, {exp.location}
              </h6>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              {exp.details.map((detail, idx) => (
                <li key={idx} className="text-gray-400 text-sm">
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
                  <h3 className={`text-xl font-semibold text-skyBlue`}>
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
