import { motion } from "framer-motion";
import { TabContentInfoCard, TabContentInfoCard1 } from "./tabContentInfoCard";
import { TabContentProps } from "../../../interfaces";
import Icon from "../Icons";

const TabContent = ({ category, activeTab }: TabContentProps) => {
  return (
    <motion.div
      key={activeTab}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className="border-l-2 border-skyBlue py-3 px-6 rounded-lg shadow-lg"
    >
      <h3 className="text-skyBlue font-semibold mb-4 flex items-center">
        <Icon icon={category.icon} className="mr-2" />
        {category.title}
      </h3>
      <div className="pl-6 space-y-2">
        <div className="grid grid-cols-6 gap-6">
          {category.items.map((item, idx) => (
            <TabContentInfoCard
              key={idx}
              icon={item.icon}
              title={item.title}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
      <div className="pl-6 space-y-2 mt-20">
        <div className="grid grid-cols-6 gap-6">
          {category.items.map((item, idx) => (
            <TabContentInfoCard1
              key={idx}
              icon={item.icon}
              title={item.title}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TabContent;
