import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Icon from "./reusable/Icons";
import { Header } from "./reusable/header";

const ExperienceSection = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const experiences = [
    {
      role: "Frontend Developer",
      company: "Clove.IT Pvt. Ltd",
      location: "Biratnagar, Nepal",
      duration: "Sep 2022 - PRESENT",
      details: [
        "Built and maintained responsive React.js applications.",
        "Collaborated closely with design and backend teams.",
        "Optimized application performance for faster load times.",
        "Implemented best practices for code quality, scalability, and maintainability.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "AppX Technologies Pvt. Ltd",
      location: "Nepal",
      duration: "Part time, Tasks based, 2024",
      details: [
        "Developed and maintained React.js applications.",
        "Enhanced existing features and improved user interfaces.",
        "Adapted quickly to changing requirements.",
        "Ensured timely delivery of tasks.",
      ],
    },
    {
      role: "Jr. Frontend Developer",
      company: "CodAvatar Tech Pvt. Ltd",
      location: "Kathmandu, Nepal",
      duration: "June 2022 - Sep 2022",
      details: [
        "Assisted in maintaining dynamic, responsive web applications using React.js.",
        "Supported senior developers in implementing new features.",
        "Gained hands-on experience in modern front-end development practices.",
      ],
    },
    {
      role: "Retail Support Officer",
      company: "WorldLink Communications Pvt. Ltd",
      location: "Itahari, Nepal",
      duration: "Sep 2019 - Feb 2020",
      details: [
        "Provided technical support to users.",
        "Resolved service-related inquiries and issues.",
        "Assisted in the installation and configuration of network equipment.",
        "Guided customers on network usage and maintenance.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Zeftware Solutions Pvt. Ltd",
      location: "Biratnagar, Nepal",
      duration: "May 2018 - Jun 2019",
      details: [
        "Developed static websites.",
        "Implemented UI/UX designs.",
        "Collaborated with designers to translate visual concepts into code.",
      ],
    },
    {
      role: "Technical Support Officer",
      company: "Zeftware Solutions Pvt. Ltd",
      location: "Biratnagar, Nepal",
      duration: "Oct 2017 - Mar 2018",
      details: [
        "Provided technical assistance to users.",
        "Diagnosed and resolved software-related issues.",
        "Supported end-users with software installation and configuration.",
        "Delivered training and guidance to users.",
      ],
    },
  ];

  const skyBlue = "#0ef";

  return (
    <section>
      <Header header="Experiences" />
      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "transparent",
              color: "black",
              border: `1px solid ${skyBlue}`,
              boxShadow: "none",
            }}
            contentArrowStyle={{
              borderRight: `10px solid ${skyBlue}`,
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

      <VerticalTimeline className="mt-20">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "black",
              color: "black",
              border: `1px solid ${skyBlue}`,
              boxShadow: "0 0 15px 5px rgba(0, 255, 255, 0.6)",
            }}
            contentArrowStyle={{
              borderRight: `10px solid ${skyBlue}`,
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
      </div>
    </section>
  );
};

export default ExperienceSection;
