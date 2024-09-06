// ListWithTitle.tsx
import React from "react";
import Icon from "./Icons";

interface ListWithTitleProps {
  title: string;
  items: string[];
  icon?: string;
}

const ListWithTitle: React.FC<ListWithTitleProps> = ({
  title,
  items,
  icon = "arrowRight",
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2 text-themeColor">{title}</h3>
      <ul className="list-disc list-inside mb-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="mb-2 text-sm leading-relaxed flex items-start dark:text-gray-200 text-gray-700"
          >
            {icon && <Icon icon={icon} className="mr-2 mt-1" />}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListWithTitle;
