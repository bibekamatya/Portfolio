import { motion } from "framer-motion";
import TabContentInfoCard from "./tabContentInfoCard";
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
      className="border-l-2 border-themeColor py-3 px-6 rounded-lg"
    >
      <h3 className="text-themeColor font-semibold mb-4 flex items-center">
        <Icon icon={category.icon} className="mr-2" />
        {category.title}
      </h3>
      <div className="pl-6 space-y-2">
        <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-6">
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
    </motion.div>
  );
};

export default TabContent;
