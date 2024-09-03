import { motion } from "framer-motion";

const ImageViewer = ({
  images,
  isOpen,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: {
  images: string[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full max-w-screen-lg max-h-screen"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <button
          className="absolute top-2 right-4 text-white text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl"
          onClick={onPrev}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl"
          onClick={onNext}
        >
          &#10095;
        </button>
        <motion.img
          key={currentIndex} // Ensure Framer Motion correctly identifies each image by its index
          src={images[currentIndex]}
          alt={`Full Screen ${currentIndex + 1}`}
          className="w-full h-full object-contain"
          initial={{ x: 300 }} // Start from the right
          animate={{ x: 0 }} // Slide to the center
          exit={{ x: -300 }} // Slide out to the left
          transition={{ type: "spring", stiffness: 100, damping: 20 }} // Smooth spring transition
        />
      </motion.div>
    </motion.div>
  );
};

export default ImageViewer;
