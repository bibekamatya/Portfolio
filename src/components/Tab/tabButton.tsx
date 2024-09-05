import { motion } from "framer-motion";
import { TabButtonProps } from "../../interfaces";
import Icon from "../Icons";

const TabButton = ({ isActive, onClick, icon, title }: TabButtonProps) => {
  return (
    <div className="md:flex-none flex w-full md:w-fit">
      <button
        onClick={onClick}
        className={`relative rounded-full font-medium dark:font-normal transition
        ${isActive ? "text-themeColor dark:text-themeColor" : "dark:md:text-gray-400 text-themeColor"}
        px-3 py-1.5
        flex items-center gap-2 justify-between`}
      >
        {isActive && (
          <motion.span
            layoutId="bubble"
            className="absolute inset-0 border-themeColor dark:border-themeColor border shadow-lg rounded-full bg-gray-200 dark:bg-transparent mix-blend-color-burn"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <Icon icon={icon} className="h-5 w-5" />
        <span className="text-base hidden md:block">{title}</span>
      </button>
    </div>
  );
};

export default TabButton;
