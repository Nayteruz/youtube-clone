import { FC } from "react";

export interface ISubItem {
  label: string;
  link?: string;
}

interface ISubmenuProps {
  items: ISubItem[];
  className?: string;
}

export const Submenu: FC<ISubmenuProps> = ({ items, className }) => {
  return (
    <ul className={`flex gap-x-2 flex-wrap ${className}`}>
      {items.length &&
        items.map((item) => (
          <li key={item.label}>
            <a href={item?.link ? item.link : "#"}>{item.label}</a>
          </li>
        ))}
    </ul>
  );
};
