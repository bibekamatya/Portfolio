import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
  faBootstrap,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import {
  faTerminal,
  faPalette,
  faNetworkWired,
  faClock,
  faToolbox,
  faPeopleArrows,
  faCogs,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

const SkillsSection = () => {
  let [activeTab, setActiveTab] = useState(0);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: faTerminal,
      skills: [
        { title: 'HTML', icon: faHtml5 },
        { title: 'CSS', icon: faCss3Alt },
        { title: 'JavaScript (ES6+)', icon: faJs },
        { title: 'React.js', icon: faReact },
        { title: 'TypeScript', icon: faJs },
        { title: 'Bootstrap', icon: faBootstrap },
        { title: 'Tailwind CSS', icon: faPalette },
        { title: 'MUI', icon: faPalette },
        { title: 'ANT-D', icon: faPalette },
      ],
    },
    {
      title: 'Tools/Version Control',
      icon: faToolbox,
      skills: [
        { title: 'Git', icon: faGitAlt },
        { title: 'Vercel', icon: faToolbox },
        { title: 'Postman', icon: faToolbox },
        { title: 'Jest', icon: faToolbox },
        { title: 'Thunder Client', icon: faToolbox },
      ],
    },
    {
      title: 'Frameworks/Libraries',
      icon: faCogs,
      skills: [
        { title: 'Next.js', icon: faReact },
        { title: 'MERN', icon: faNodeJs },
        { title: 'Redux', icon: faJs },
        { title: 'Redux Thunk', icon: faJs },
        { title: 'ESLint/Prettier', icon: faJs },
        { title: 'GraphQL', icon: faReact },
      ],
    },
    {
      title: 'Other',
      icon: faLightbulb,
      skills: [
        { title: 'Networking', icon: faNetworkWired },
        { title: 'Graphic Designing', icon: faPalette },
        { title: 'Computer Hardware & Software', icon: faToolbox },
      ],
    },
    {
      title: 'Soft Skills',
      icon: faPeopleArrows,
      skills: [
        { title: 'Problem-solving', icon: faLightbulb },
        { title: 'Teamwork', icon: faPeopleArrows },
        { title: 'Time management', icon: faClock },
        { title: 'Collaboration', icon: faPeopleArrows },
        { title: 'Adaptability', icon: faLightbulb },
      ],
    },
  ];
  return (
    <section className="text-white py-12 px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-300">
        Skills
      </h2>
      <div className="relative flex justify-center mb-8">
        <div className="relative z-10 flex space-x-4 w-full">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className="relative rounded-full px-3 py-1.5 text-sm font-medium transition text-skyBlue"
            >
              {activeTab === index && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-skyBlue mix-blend-difference rounded-full "
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <FontAwesomeIcon icon={category.icon} className="mr-2" />
              <span className="text-base"> {category.title}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="border-l-2 py-3 px-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <FontAwesomeIcon
              icon={skillCategories[activeTab].icon}
              className="mr-2"
            />
            {skillCategories[activeTab].title}
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <div className="grid grid-cols-6 gap-3">
              {skillCategories[activeTab].skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  className="text-md flex items-center justify-center flex-col p-2 border border-skyBlue rounded-xl gap-4 h-28 w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <FontAwesomeIcon
                    icon={skill.icon}
                    className="h-8 w-8 text-skyBlue"
                  />
                  <span className="text-skyBlue text-xs text-center">
                    {skill.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
