import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Project } from "../interfaces";
import Icon from "./Icons";
import ImageViewer from "./imageViewer";
import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  project: Project | null;
}

const Modal = ({ isOpen, toggleModal, project }: ModalProps) => {
  if (!project) return null;

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImageViewer = (index: number) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => setIsViewerOpen(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? "block" : "hidden"}`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={toggleModal}
      ></div>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: isOpen ? 1 : 0.8 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg"
      >
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={toggleModal}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>
        <div className="text-gray-800">
          <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
          <p className="text-sm text-gray-500 mb-4">{project.type}</p>
          <p className="text-base mb-4">{project.description}</p>
          <h3 className="text-xl font-semibold mb-2">Features:</h3>
          <ul className="list-disc list-inside mb-4">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="mb-2 text-sm leading-relaxed flex items-start"
              >
                <Icon icon="arrowRight" className="mr-2 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mb-2">Technologies:</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.images.length > 0 && (
            <>
              <h3 className="text-xl font-semibold mb-2">Images:</h3>
              <div className="flex space-x-4 mb-4 w-full justify-center max-w-full overflow-x-auto">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Project ${project.title} ${index + 1}`}
                    className="h-32 w-auto max-w-full object-cover rounded-md cursor-pointer"
                    onClick={() => openImageViewer(index)}
                  />
                ))}
              </div>
            </>
          )}
          {project.deployedLink && (
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-themeColor text-white px-4 py-2 rounded-md ml-auto flex w-fit"
            >
              Visit Project
            </a>
          )}
        </div>
        <ImageViewer
          images={project.images}
          isOpen={isViewerOpen}
          currentIndex={currentIndex}
          onClose={closeImageViewer}
          onNext={nextImage}
          onPrev={prevImage}
        />
      </motion.div>
    </motion.div>
  );
};

export default Modal;
