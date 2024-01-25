import { FC } from "react";
import { IItem, ListItem } from "./ListItem";

interface IListProps {
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
