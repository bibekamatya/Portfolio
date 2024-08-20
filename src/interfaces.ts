import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: FontAwesomeIconProps['icon'];
  title: string;
}

interface Item {
  icon: FontAwesomeIconProps['icon'];
  title: string;
}

interface Category {
  icon: FontAwesomeIconProps['icon'];
  title: string;
  items: Item[];
}

export interface TabbedContentProps {
  categories: Category[];
}

export interface TabContentInfoCardProps {
  icon: FontAwesomeIconProps['icon'];
  title: string;
  delay: number;
}

export interface TabContentProps {
  category: {
    icon: FontAwesomeIconProps['icon'];
    title: string;
    items: Item[];
  };
  activeTab: number;
}
