import { ListItem } from "./ListItem";
import { FC } from "react";
import { IListProps } from "./types";

export const List: FC<IListProps> = ({ items }) => {
  return (
    <ul>
      {items.length &&
        items.map((item) => <ListItem key={item.id} item={item} />)}
    </ul>
  );
};
