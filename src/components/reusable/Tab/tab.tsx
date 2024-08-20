import { useState } from 'react';
import TabButton from './tabButton';
import TabContent from './tabContent';
import { TabbedContentProps } from '../../../interfaces';

const Tab = ({ categories }: TabbedContentProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="relative flex justify-center mb-8">
        <div className="relative z-10 flex space-x-4 w-full">
          {categories.map((category, index) => (
            <TabButton
              key={index}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
              icon={category.icon}
              title={category.title}
            />
          ))}
        </div>
      </div>
      <div className="space-y-8">
        <TabContent category={categories[activeTab]} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Tab;
