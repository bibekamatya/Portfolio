import { motion } from 'framer-motion';
import { TabContentInfoCardProps } from '../../../interfaces';
import Icon from '../Icons';

const TabContentInfoCard = ({
  icon,
  title,
  delay,
}: TabContentInfoCardProps) => {
  return (
    <motion.div
      className="text-md flex items-center justify-center flex-col p-2 border border-skyBlue rounded-xl gap-4 h-28 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      <Icon icon={icon} className="h-8 w-8 text-skyBlue" />
      <span className="text-skyBlue text-xs text-center">{title}</span>
    </motion.div>
  );
};

export default TabContentInfoCard;
