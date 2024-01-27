import { FC } from "react";
import { IListItemProps } from "./types";
import { BaseIcon } from "@src/components/shared/Icons";

export const ListItem: FC<IListItemProps> = ({ item }) => {
  const { subMenu, label, iconName, href = "#" } = item;
  return (
    <li>
      <a
        href={href}
        className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
      >
        {iconName && (
          <BaseIcon icon={iconName} className="w-6 h-6 mr-3 text-gray-400" />
        )}
        <span>{label}</span>
        {subMenu && (
          <BaseIcon
            icon="chevronRight"
            className="w-5 h-5 text-gray-400 ml-auto"
          />
        )}
      </a>
    </li>
  );
};
