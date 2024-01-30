import { BaseIcon, TIcons } from "@src/shared/Icons";
import { FC } from "react";

interface IDropdownItem {
  label: string;
  iconName: TIcons;
  link?: string;
}

interface IDropdownItemProps {
  item: IDropdownItem;
}

export const DropdownItem: FC<IDropdownItemProps> = ({ item }) => {
  const { link, label, iconName } = item;
  return (
    <li>
      <a
        href={link || "#"}
        className="flex items-center pl-5 pr-8 py-2 text-sm hover:bg-gray-200"
      >
        <BaseIcon icon={iconName} className="w-5 h-5 mr-4 text-gray-400" />
        <span>{label}</span>
      </a>
    </li>
  );
};
