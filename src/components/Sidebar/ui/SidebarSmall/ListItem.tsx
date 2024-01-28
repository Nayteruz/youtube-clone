import { FC } from "react";
import { BaseIcon } from "@src/shared/Icons";
import { IItem } from "../../model/types";

interface ISmallItemProps {
  item: IItem;
}

export const ListItem: FC<ISmallItemProps> = ({ item }) => {
  const { link, label, iconName, isActive } = item;

  return (
    <li>
      <a
        href={link || "#"}
        className={`flex flex-col items-center px-2 py-5 hover:bg-gray-100 ${isActive ? "text-red-500" : ""}`}
      >
        {iconName && <BaseIcon icon={iconName} className="w-6 h-6 mb-1.5" />}
        <span className="text-xs">{label}</span>
      </a>
    </li>
  );
};
