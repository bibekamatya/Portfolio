import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TabButtonProps } from "../../../interfaces";

const TabButton = ({ isActive, onClick, icon, title }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition ${
        isActive ? "text-white" : "text-skyBlue"
      }`}
    >
      {isActive && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 bg-skyBlue mix-blend-difference rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <FontAwesomeIcon icon={icon} className="mr-2" />
      <span className="text-base">{title}</span>
    </button>
  );
};

export default TabButton;
