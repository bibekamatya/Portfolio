import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Project } from "../interfaces";
import ImageViewer from "./imageViewer";
import ListWithTitle from "./listWithTItle";

interface OffCanvasProps {
  isOpen: boolean;
  toggleCanvas: () => void;
  project: Project | null;
}

const OffCanvas = ({ isOpen, toggleCanvas, project }: OffCanvasProps) => {
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
    <>
      {/* Background overlay when the off-canvas is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            toggleCanvas();
            setIsViewerOpen(false);
          }}
        ></div>
      )}

      {/* Off-canvas panel */}
      <div
        className={`fixed left-0 top-0 bottom-0 w-full xl:max-w-5xl md:max-w-3xl bg-white dark:bg-darkBlue shadow-lg z-50 overflow-y-auto transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300"
          onClick={toggleCanvas}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        {/* Content */}
        <div className="p-6 text-gray-800">
          {/* Project Title */}
          <h2 className="text-3xl font-bold mb-2 text-themeColor">
            {project.title}
          </h2>
          {/* Project Type */}
          <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
            {project.type}
          </p>
          {/* Project Description */}
          <p className="text-base mb-4 dark:text-gray-300">
            {project.overview}
          </p>

          {/* Core Features */}
          {project.coreFeatures && (
            <ListWithTitle
              title="Core Features:"
              items={project.coreFeatures}
            />
          )}

          {/* Advanced Features */}
          {project.advancedFeatures && (
            <ListWithTitle
              title="Advanced Features:"
              items={project.advancedFeatures}
            />
          )}

          {/* Technologies */}
          <h3 className="text-xl font-semibold mb-2 text-themeColor">
            Technologies Used:
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-200 dark:bg-lightBlue dark:text-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Development Tools */}
          {project.development && (
            <>
              <ListWithTitle
                title="Development Tools:"
                items={project.development.tools}
              />

              {/* Development Practices */}
              <ListWithTitle
                title="Development Practices:"
                items={project.development.practices}
              />
            </>
          )}

          {/* Image Gallery */}
          {project.images.length > 0 && (
            <>
              <h3 className="text-xl font-semibold mb-2 text-themeColor">
                Project Images:
              </h3>
              <div className="flex space-x-4 mb-4 w-full overflow-x-auto pt-3">
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

          {/* Deployed Project Link */}
          {project.deployedLink && (
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-themeColor text-white px-4 py-2 text-sm rounded-md ml-auto flex w-fit"
            >
              Visit Project
            </a>
          )}
        </div>
      </div>
      {/* Image Viewer */}
      <ImageViewer
        images={project.images}
        isOpen={isViewerOpen}
        currentIndex={currentIndex}
        onClose={closeImageViewer}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
};

export default OffCanvas;
