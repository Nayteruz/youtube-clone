import { FC } from "react";
import { ListItem } from "./ListItem";
import { IDropdownAppItem } from "../../model/types";

interface IListProps {
  className?: string;
  items: IDropdownAppItem[];
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
