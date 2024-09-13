import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { Header } from "../header";
import { PROJECTS_DATA } from "../../dataSheet";
import Canvas from "../canvas";
import { Project } from "../../interfaces";

const Projects = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  const toggleCanvas = () => {
    setIsCanvasOpen(!isCanvasOpen);
  };

  // Memoize function for performance improvement
  const openCanvasWithProject = useCallback((project: Project) => {
    setSelectedProject(project);
    toggleCanvas();
  }, []);

  // Handle mobile click interaction
  const handleMobileClick = (index: number) => {
    if (isHovered === index) {
      setIsHovered(null); // Hide on second tap
    } else {
      setIsHovered(index); // Show on tap
    }
  };

  return (
    <>
      <Header header="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden grid custom-shadow rounded-lg"
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
            onClick={() => handleMobileClick(index)} // Mobile friendly interaction
            initial={{ opacity: 0, y: 50 }} // Initial position for entrance
            animate={{ opacity: 1, y: 0 }} // Animate to visible
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered entrance
          >
            <img
              loading="lazy" // Lazy loading for performance
              src={project.displayImage}
              alt={project.title}
              className="h-full max-w-full rounded-lg"
              onError={(e) => (e.currentTarget.src = "/default-image.jpg")} // Fallback image
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
              <motion.h3
                className="text-lg mb-2 dark:text-themeColor text-white font-semibold dark:font-normal"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isHovered === index ? 1 : 0,
                  y: isHovered === index ? 0 : 20,
                }}
                transition={{ duration: 0.4 }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="text-sm text-gray-200 py-2 px-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isHovered === index ? 1 : 0,
                  y: isHovered === index ? 0 : 20,
                }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {project.description}
              </motion.p>
              {project.showDetails && (
                <motion.button
                  onClick={() => openCanvasWithProject(project)}
                  className="px-3 py-1 border border-themeColor rounded-md mt-3 text-sm text-gray-100 hover:bg-themeColor transition duration-500"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isHovered === index ? 1 : 0,
                    scale: isHovered === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  Uncover More
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
      <Canvas
        isOpen={isCanvasOpen}
        toggleCanvas={toggleCanvas}
        project={selectedProject}
      />
    </>
  );
};

export default Projects;
