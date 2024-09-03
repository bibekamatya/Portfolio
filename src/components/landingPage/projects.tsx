import { motion } from "framer-motion";
import { useState } from "react";
import { Header } from "../header";
import { PROJECTS_DATA } from "../../dataSheet";
import Modal from "../offCanvas";
import { Project } from "../../interfaces";

const Projects = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openModalWithProject = (project: Project) => {
    setSelectedProject(project);
    toggleModal();
  };

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
              <h3 className="text-lg mb-2 dark:text-themeColor text-white font-semibold dark:font-normal">
                {project.title}
              </h3>
              <p className="text-sm text-gray-200 py-2 px-8 text-center">
                {project.description}
              </p>
              {project.details && (
                <button
                  onClick={() => openModalWithProject(project)}
                  className="px-3 py-1 border border-themeColor rounded-md mt-3 text-sm text-gray-100 hover:bg-themeColor transition duration-500"
                >
                  Uncover More
                </button>
              )}
            </motion.div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        project={selectedProject}
      />
    </>
  );
};

export default Projects;
