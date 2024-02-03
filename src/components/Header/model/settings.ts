import { IDropdownSettingsItem } from "@src/components/Header/model/types";

const appearance = [
  {
    label: "Use device theme",
  },
  {
    label: "Dark theme",
  },
  {
    label: "Light theme",
  },
];

const languages = [
  {
    label: "Language: Russian",
  },
  {
    label: "Language: English",
  },
  {
    label: "Language: African",
  },
];

export const menuSettings: IDropdownSettingsItem[] = [
  {
    label: "Appearance: Light",
    iconName: "sun",
    submenu: appearance,
    description: "Settings applies to this browser only",
  },
  {
    label: "Language: English",
    iconName: "lang",
    submenu: languages,
    description: "Select your language",
  },
  {
    label: "Location: Russia",
    iconName: "location",
    submenu: [],
    description: "test description",
  },
  {
    label: "Settings",
    iconName: "settings",
  },
  {
    label: "Your data in YouTube",
    iconName: "shield",
  },
  {
    label: "Help",
    iconName: "help",
  },
  {
    label: "Send feedback",
    iconName: "send",
  },
  {
    label: "Keyboard shortcuts",
    iconName: "keyboard",
  },
  {
    label: "Restricted Mode: Off",
    submenu: [],
    description: "test description",
    border: true,
  },
];
