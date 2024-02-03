import { TIcons } from "@src/shared/Icons";

export interface IDropdownSettingsItem {
  label: string;
  submenu?: IDropdownSettingsItem[];
  iconName?: TIcons;
  link?: string;
  description?: string;
  border?: boolean;
}
