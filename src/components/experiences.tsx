import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const ExperienceSection = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const experiences = [
    {
      role: 'Frontend Developer',
      company: 'Clove.IT Pvt. Ltd',
      location: 'Biratnagar, Nepal',
      duration: 'Sep 2022 - PRESENT',
      details: [
        'Built and maintained responsive React.js applications.',
        'Collaborated closely with design and backend teams.',
        'Optimized application performance for faster load times.',
        'Implemented best practices for code quality, scalability, and maintainability.',
      ],
      borderColor: 'border-blue-400',
    },
    {
      role: 'Frontend Developer',
      company: 'AppX Technologies Pvt. Ltd',
      location: 'Nepal',
      duration: 'Part time, Tasks based, 2024',
      details: [
        'Developed and maintained React.js applications.',
        'Enhanced existing features and improved user interfaces.',
        'Adapted quickly to changing requirements.',
        'Ensured timely delivery of tasks.',
      ],
      borderColor: 'border-green-400',
    },
    {
      role: 'Jr. Frontend Developer',
      company: 'CodAvatar Tech Pvt. Ltd',
      location: 'Kathmandu, Nepal',
      duration: 'June 2022 - Sep 2022',
      details: [
        'Assisted in maintaining dynamic, responsive web applications using React.js.',
        'Supported senior developers in implementing new features.',
        'Gained hands-on experience in modern front-end development practices.',
      ],
      borderColor: 'border-pink-400',
    },
    {
      role: 'Retail Support Officer',
      company: 'WorldLink Communications Pvt. Ltd',
      location: 'Itahari, Nepal',
      duration: 'Sep 2019 - Feb 2020',
      details: [
        'Provided technical support to users.',
        'Resolved service-related inquiries and issues.',
        'Assisted in the installation and configuration of network equipment.',
        'Guided customers on network usage and maintenance.',
      ],
      borderColor: 'border-yellow-400',
    },
    {
      role: 'Frontend Developer',
      company: 'Zeftware Solutions Pvt. Ltd',
      location: 'Biratnagar, Nepal',
      duration: 'May 2018 - Jun 2019',
      details: [
        'Developed static websites.',
        'Implemented UI/UX designs.',
        'Collaborated with designers to translate visual concepts into code.',
      ],
      borderColor: 'border-purple-400',
    },
    {
      role: 'Technical Support Officer',
      company: 'Zeftware Solutions Pvt. Ltd',
      location: 'Biratnagar, Nepal',
      duration: 'Oct 2017 - Mar 2018',
      details: [
        'Provided technical assistance to users.',
        'Diagnosed and resolved software-related issues.',
        'Supported end-users with software installation and configuration.',
        'Delivered training and guidance to users.',
      ],
      borderColor: 'border-red-400',
    },
  ];

  const getGradientDirection = (index: number) => {
    return index % 2 === 0
      ? 'linear-gradient(to right, #000000, #4c04047c)'
      : 'linear-gradient(to left, #000000, #4c04047c)';
  };

  return (
    <section className="text-white py-12 px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-teal-300">
        Experience
      </h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`${exp.borderColor} border-l-2 py-3 px-6 rounded-lg relative shadow shadow-sky-900`}
            // className={` py-3 px-6 rounded-lg relative shadow-md shadow-gray-700`}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
            ref={(element) => (refs.current[index] = element)}
            animate={{
              height: isHovered === index ? 'auto' : '80px',
              minHeight: isHovered === index ? '200px' : '80px',
            }}
            transition={{ duration: 0.3 }}
            style={{ background: getGradientDirection(index) }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className={`text-xl font-semibold text-sky-400`}>
                  {exp.role}
                </h3>
                <p className="text-white">
                  {exp.company}, {exp.location}
                </p>
              </div>
              <span className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center">
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
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
                <li key={idx} className="text-gray-300 text-sm">
                  {detail}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
