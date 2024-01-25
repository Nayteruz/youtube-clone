import { IListItem, ListItem } from "./ListItem";
import { FC } from "react";

interface IListProps {
  items: IListItem[];
}

export const List: FC<IListProps> = ({ items }) => {
  return (
    <ul>
      {items.length &&
        items.map((item) => <ListItem key={item.id} item={item} />)}
    </ul>
  );
};
