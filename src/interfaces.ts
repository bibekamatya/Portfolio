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

export interface SectionProps {
  title: string;
  component: React.ReactNode;
}

export interface LogoData {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  type?: string;
  description?: string;
  coreFeatures?: string[];
  advancedFeatures?: string[];
  technologies: string[];
  images: string[];
  deployedLink?: string;
  overview?: string;
  development?: {
    tools: string[];
    practices: string[];
  };
}
