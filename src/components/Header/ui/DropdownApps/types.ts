export interface IItem {
  id: string;
  label: string;
  href?: string;
}

export interface IListItemProps {
  item: IItem;
}

export interface IListProps {
  className?: string;
  items: IItem[];
}
