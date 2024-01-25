import { FC } from "react";
import { ListItem, IItem } from "./ListItem";

interface IListProps {
  className?: string;
  items: IItem[];
}

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
