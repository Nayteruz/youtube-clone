import { FC } from "react";
import { IListItemProps } from "./types";
import { BaseIcon } from "@src/components/shared/Icons";

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
