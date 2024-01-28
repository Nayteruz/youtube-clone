import { TIcons } from "@src/shared/Icons";

export interface ISubItem {
  label: string;
  link?: string;
}

export interface IItem {
  label: string;
  iconName?: TIcons;
  isActive?: boolean;
  link?: string;
}
