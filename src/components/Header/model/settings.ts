import { IDropdownSettingsItem } from "./types";

export const listSettings: IDropdownSettingsItem[] = [
  {
    id: "1",
    label: "Appearance: Light",
    subMenu: true,
    iconName: "sun",
  },
  {
    id: "2",
    label: "Language: English",
    subMenu: true,
    iconName: "lang",
  },
  {
    id: "3",
    label: "Location: Russia",
    subMenu: true,
    iconName: "location",
  },
  {
    id: "4",
    label: "Settings",
    iconName: "settings",
  },
  {
    id: "5",
    label: "Your data in YouTube",
    iconName: "shield",
  },
  {
    id: "6",
    label: "Help",
    iconName: "help",
  },
  {
    id: "7",
    label: "Send feedback",
    iconName: "send",
  },
  {
    id: "8",
    label: "Keyboard shortcuts",
    iconName: "keyboard",
  },
];

export const smallList: IDropdownSettingsItem[] = [
  {
    id: "1",
    label: "Restricted Mode: Off",
    subMenu: true,
  },
];
