import { TIcons } from "@src/components/shared/Icons";

export interface IListItem {
  id: string;
  label: string;
  subMenu?: boolean;
  iconName?: TIcons;
  href?: string;
}

export interface IListItemProps {
  item: IListItem;
}

export interface IListProps {
  items: IListItem[];
}
