import { motion } from "framer-motion";
import { TabButtonProps } from "../../interfaces";
import Icon from "../Icons";

const TabButton = ({ isActive, onClick, icon, title }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-full font-medium transition
        ${isActive ? "dark:text-black text-white" : "text-themeColor"}
        px-3 py-1.5
        flex items-center gap-2`}
    >
      {isActive && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 bg-themeColor mix-blend-color-burn rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <Icon icon={icon} className="h-5 w-5" />
      <span className="text-base hidden md:block">{title}</span>
    </button>
  );
};

export default TabButton;
