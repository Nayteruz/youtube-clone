import { FC } from "react";
import { ListItem } from "./ListItem";
import { IItem } from "./types";

export interface IListProps {
  items: IItem[];
  rounded?: boolean;
}

export const List: FC<IListProps> = ({ items, rounded = false }) => {
  return (
    <ul>
      {items.length &&
        items.map((item) => (
          <ListItem key={item.label} item={item} rounded={rounded} />
        ))}
    </ul>
  );
};
