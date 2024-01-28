import { FC } from "react";
import { BaseIcon } from "@src/shared/Icons";
import { IDropdownAppItem } from "../../model/types";

interface IDropdownAppProps {
  item: IDropdownAppItem;
}

export const ListItem: FC<IDropdownAppProps> = ({ item }) => {
  const { label, link } = item;

  return (
    <li>
      <a
        href={link || "#"}
        className="flex items-center px-3 py-2 label-sm hover:bg-gray-100"
      >
        <BaseIcon icon="play" className="w-6 h-6 mr-3 text-red-500" />
        <span>{label}</span>
      </a>
    </li>
  );
};
