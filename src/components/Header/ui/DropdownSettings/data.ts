import { IListItem } from "./types";

export const listSettings: IListItem[] = [
  {
    id: crypto.randomUUID(),
    label: "Appearance: Light",
    subMenu: true,
    iconName: "sun",
  },
  {
    id: crypto.randomUUID(),
    label: "Language: English",
    subMenu: true,
    iconName: "lang",
  },
  {
    id: crypto.randomUUID(),
    label: "Location: Russia",
    subMenu: true,
    iconName: "location",
  },
  {
    id: crypto.randomUUID(),
    label: "Settings",
    iconName: "settings",
  },
  {
    id: crypto.randomUUID(),
    label: "Your data in YouTube",
    iconName: "shield",
  },
  {
    id: crypto.randomUUID(),
    label: "Help",
    iconName: "help",
  },
  {
    id: crypto.randomUUID(),
    label: "Send feedback",
    iconName: "send",
  },
  {
    id: crypto.randomUUID(),
    label: "Keyboard shortcuts",
    iconName: "keyboard",
  },
];

export const smallList: IListItem[] = [
  {
    id: crypto.randomUUID(),
    label: "Restricted Mode: Off",
    subMenu: true,
  },
];
