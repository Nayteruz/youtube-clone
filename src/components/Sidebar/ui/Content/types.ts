import { TIcons } from "@src/components/shared/Icons";

export interface IItem {
  label: string;
  iconName?: TIcons;
  isActive?: boolean;
  link?: string;
}

export interface ISubItem {
  label: string;
  link?: string;
}
