import { FC } from "react";
import { IDropdownSettingsItem } from "../../model/types";
import { ListItem } from "./ListItem";

interface IDropdownListSettingsProps {
  items: IDropdownSettingsItem[];
}

export const List: FC<IDropdownListSettingsProps> = ({ items }) => {
  return (
    <ul>
      {items.length &&
        items.map((item) => <ListItem key={item.id} item={item} />)}
    </ul>
  );
};
