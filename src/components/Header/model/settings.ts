import { IDropdownItem } from "./types";

export const menuSettings: IDropdownItem[] = [
  {
    id: "appearance",
    label: "Appearance: Light",
    iconName: "sun",
    submenu: true,
    description: "Settings applies to this browser only",
  },
  {
    id: "language",
    label: "Language: English",
    iconName: "lang",
    submenu: true,
    description: "Select your language",
  },
  {
    id: "location",
    label: "Location: Russia",
    iconName: "location",
    submenu: true,
    description: "Choose your location",
  },
  {
    id: "settings",
    label: "Settings",
    iconName: "settings",
  },
  {
    id: "shield",
    label: "Your data in YouTube",
    iconName: "shield",
  },
  {
    id: "help",
    label: "Help",
    iconName: "help",
  },
  {
    id: "feedback",
    label: "Send feedback",
    iconName: "send",
  },
  {
    id: "keyboard_shortcats",
    label: "Keyboard shortcuts",
    iconName: "keyboard",
  },
  {
    id: "restricted",
    label: "Restricted Mode: Off",
    submenu: true,
    description: "test description",
    border: true,
  },
];
