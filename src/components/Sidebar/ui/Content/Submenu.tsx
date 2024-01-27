import { FC } from "react";
import { ISubItem } from "./types";

export interface ISubmenuProps {
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
