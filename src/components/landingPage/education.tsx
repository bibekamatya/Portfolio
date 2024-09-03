import { motion } from "framer-motion";
import { Header } from "../header";
import { EDUCATION_DATA } from "../../dataSheet";
import Icon from "../Icons";

const Education = () => {
  return (
    <>
      <Header header="Education" />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {EDUCATION_DATA.map((edu, idx) => (
          <motion.div
            key={idx}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Card Content */}
            <div className="p-4 rounded-lg h-full custom-shadow border-b border-themeColor flex flex-col items-center gap-2">
              <div className="flex items-center justify-center h-14 w-14 border-2 border-themeColor rounded-full mb-4">
                <Icon
                  icon="graduationCap"
                  className="h-8 w-8 text-themeColor"
                />
              </div>
              <h3 className="text-xl font-semibold text-themeColor">
                {edu.degree}
              </h3>
              <div className="dark:text-gray-400 text-gray-500 text-center">
                <p>
                  {edu.field && `${edu.field} | `}
                  {edu.board} | {edu.percentage}
                </p>
                <p>{edu.institution}</p>
                <p className="text-sm dark:text-gray-500 text-gray-400 mt-1">
                  {edu.address} {edu.year}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-40">
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
              <Icon
                icon="graduationCap"
                className="h-8 w-8 text-themeColor mb-5"
              />
              <h3 className="text-xl font-semibold text-themeColor">
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
      </div> */}
    </>
  );
};

export default Education;
