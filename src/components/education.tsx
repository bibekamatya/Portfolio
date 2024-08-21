import { motion } from "framer-motion";
import { Header } from "./reusable/header";
import Icon from "./reusable/Icons";
import { GlowingCard } from './reusable/glowingCard';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelors Degree",
      field: "B.SC.CSIT",
      institution: "Himalaya Darshan College",
      address: "Biratnagar, Morang, Nepal",
      board: "TU",
      year: 2022,
      percentage: "63%",
      icon: "graduationCap",
    },
    {
      degree: "High School",
      field: "Science",
      institution: "Kanchanjunga Higher Secondary School",
      address: "Biratnagar, Morang, Nepal",
      board: "HSEB",
      year: 2013,
      percentage: "62%",
      icon: "school",
    },
    {
      degree: "SLC",
      field: "",
      institution: "Shree Janta Higher Secondary School",
      address: "Deaury, Udayapur, Nepal",
      board: "Nepal Education Board",
      year: 2010,
      percentage: "56%",
      icon: "university",
    },
  ];

  return (
    <section>
      <Header header="Education" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Card Content */}
            <div className="p-4 shadow-lg rounded-lg border border-skyBlue flex flex-col items-center gap-2">
              <div className="flex items-center justify-center h-16 w-16 border-2 border-skyBlue rounded-full mb-2">
                <Icon icon={edu.icon} className="h-8 w-8 text-skyBlue" />
              </div>
              <h3 className="text-xl font-semibold text-skyBlue">
                {edu.degree}
              </h3>
              <p className=" text-gray-400">
                {edu.field && `${edu.field} | `}
                {edu.board} | {edu.percentage}
              </p>
              <p className="text-gray-400">{edu.institution}</p>
              <p className="text-sm text-gray-500">
                {edu.address} {edu.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-40">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <GlowingCard>
              {/* <div className="flex items-center justify-center h-10 w-10 border-2 border-skyBlue rounded-full mb-2"> */}
              <Icon icon="graduationCap" className="h-8 w-8 text-skyBlue mb-5" />
              {/* </div> */}
              <h3 className="text-xl font-semibold text-skyBlue">
                {edu.degree}
              </h3>
              <p className=" text-gray-400">
                {edu.field && `${edu.field} | `}
                {edu.board} | {edu.percentage}
              </p>
              <p className="text-gray-400 mt-2">{edu.institution}</p>
              <p className="text-sm text-gray-500">
                {edu.address} {edu.year}
              </p>
            </GlowingCard>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
