import { FC } from "react";
import { BaseIcon } from "@src/shared/Icons";
import { IItem } from "./types";

export interface IListItemProps {
  item: IItem;
  rounded?: boolean;
}

export const ListItem: FC<IListItemProps> = ({ item, rounded = false }) => {
  const { label, iconName, isActive, link = "#" } = item;

  return (
    <li>
      <a
        href={link}
        className={`flex items-center px-6 py-2 text-sm ${isActive ? "font-medium text-gray-800 bg-gray-200 hover:bg-gray-300" : "hover:bg-gray-100"} `}
      >
        {rounded && iconName && (
          <div className="p-1 mr-6 bg-gray-700 rounded-full">
            <BaseIcon
              icon={iconName ? iconName : "home"}
              className="w-4 h-4 text-white"
            />
          </div>
        )}
        {!rounded && iconName && (
          <BaseIcon
            icon={iconName ? iconName : "home"}
            className={`w-6 h-6 mr-6 ${isActive ? "text-red-500" : ""}`}
          />
        )}
        <span>{label}</span>
      </a>
    </li>
  );
};
