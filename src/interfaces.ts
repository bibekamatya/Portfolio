export interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  icon: string;
  title: string;
}

interface Item {
  icon: string;
  title: string;
}

interface Category {
  icon: string;
  title: string;
  items: Item[];
}

export interface TabbedContentProps {
  categories: Category[];
}

export interface TabContentInfoCardProps {
  icon: string;
  title: string;
  delay: number;
}

export interface TabContentProps {
  category: {
    icon: string;
    title: string;
    items: Item[];
  };
  activeTab: number;
}

export interface IconProps {
  icon: string;
  className?: string;
}
