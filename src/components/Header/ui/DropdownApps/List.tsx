import { FC } from "react";
import { ListItem } from "./ListItem";
import { IListProps } from "./types";

export const List: FC<IListProps> = ({ className, items }) => {
  return (
    <section className={className}>
      <ul>
        {items.length &&
          items.map((item) => <ListItem key={item.id} item={item} />)}
      </ul>
    </section>
  );
};
