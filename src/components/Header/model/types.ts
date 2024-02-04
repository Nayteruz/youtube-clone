import { TIcons } from "@src/shared/Icons";

export interface IActiveItem {
  menuId: string;
  subMenuId: string;
}

export interface IDropdownSubitem {
  id: string;
  label: string;
  link?: string;
}

export interface IDropdownItem {
  id: string;
  label: string;
  submenu?: IDropdownSubitem[];
  iconName?: TIcons;
  isActive?: boolean;
  link?: string;
  description?: string;
  border?: boolean;
}
