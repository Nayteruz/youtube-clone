import { TIcons } from "@src/components/shared/Icons";

export interface ISubItem {
  label: string;
  link?: string;
}

export interface ISubmenuProps {
  items: ISubItem[];
  className?: string;
}

export interface ISectionHeadingProps {
  label: string;
}

export interface IItem {
  label: string;
  iconName?: TIcons;
  isActive?: boolean;
  link?: string;
}

export interface IListItemProps {
  item: IItem;
  rounded?: boolean;
}

export interface IListProps {
  items: IItem[];
  rounded?: boolean;
}
