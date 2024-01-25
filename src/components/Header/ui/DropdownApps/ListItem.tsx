import { BaseIcon } from "@src/components/Icons";
import { FC } from "react";

export interface IItem {
  id: string;
  label: string;
  href?: string;
}

export interface IListItemProps {
  item: IItem;
}

export const ListItem: FC<IListItemProps> = ({ item }) => {
  const { label, href } = item;

  return (
    <li>
      <a
        href={href}
        className="flex items-center px-3 py-2 label-sm hover:bg-gray-100"
      >
        <BaseIcon icon="play" className="w-6 h-6 mr-3 label-red-500" />
        <span>{label}</span>
      </a>
    </li>
  );
};
