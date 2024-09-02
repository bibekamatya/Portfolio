import { motion } from "framer-motion";
import { useState } from "react";
import { Header } from "./reusable/header";
import { PROJECTS_DATA } from "../dataSheet";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <>
      <Header header="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PROJECTS_DATA.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden grid custom-shadow rounded-lg"
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="h-full max-w-full rounded-lg"
            />
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center rounded bg-black bg-opacity-70"
              initial={{ opacity: 0, y: "-100%" }}
              animate={{
                opacity: isHovered === index ? 1 : 0,
                y: isHovered === index ? "0%" : "-100%",
              }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-lg mb-2 text-themeColor">{project.title}</h3>
              <p className="text-sm text-white p-2">{project.description}</p>
              <button
                onClick={() =>
                  navigate(`/projects/${project.title.toLowerCase()}`, {
                    state: project,
                  })
                }
                className="px-3 py-1 border border-themeColor rounded-md mt-3 text-sm text-themeColor hover:bg-themeColor hover:text-black transition duration-500"
              >
                Uncover More
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
