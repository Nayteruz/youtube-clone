import { IDropdownItem } from "@src/components/Header/model/types";

const appearance = [
  {
    id: "1",
    label: "Use device theme",
  },
  {
    id: "2",
    label: "Dark theme",
  },
  {
    id: "3",
    label: "Light theme",
  },
];

const languages = [
  {
    id: "1",
    label: "Language: Russian",
  },
  {
    id: "2",
    label: "Language: English",
  },
  {
    id: "3",
    label: "Language: African",
  },
];

export const menuSettings: IDropdownItem[] = [
  {
    id: "1",
    label: "Appearance: Light",
    iconName: "sun",
    submenu: appearance,
    description: "Settings applies to this browser only",
  },
  {
    id: "2",
    label: "Language: English",
    iconName: "lang",
    submenu: languages,
    description: "Select your language",
  },
  {
    id: "3",
    label: "Location: Russia",
    iconName: "location",
    submenu: [],
    description: "test description",
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
  {
    id: "9",
    label: "Restricted Mode: Off",
    submenu: [],
    description: "test description",
    border: true,
  },
];
