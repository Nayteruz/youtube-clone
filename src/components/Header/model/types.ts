import { TIcons } from "@src/shared/Icons";

export interface IDropdownAppItem {
  id: string;
  label: string;
  link?: string;
}

export interface IDropdownSettingsItem {
  id: string;
  label: string;
  subMenu?: boolean;
  iconName?: TIcons;
  href?: string;
}
