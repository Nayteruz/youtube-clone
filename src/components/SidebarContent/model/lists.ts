import { IItem } from "@src/components/SidebarContent/ui/ListItem";
import { ISubItem } from "@src/components/SidebarContent/ui/Submenu";

export const homeList: IItem[] = [
  {
    label: "Home",
    iconName: "home",
    isActive: true,
  },
  {
    label: "Trending",
    iconName: "flame",
  },
  {
    label: "Subscriptions",
    iconName: "subscript",
  },
];

export const libList: IItem[] = [
  {
    label: "Library",
    iconName: "library",
  },
  {
    label: "History",
    iconName: "time",
  },
];

export const bestList: IItem[] = [
  {
    label: "Music",
    iconName: "nota",
  },
  {
    label: "Sports",
    iconName: "micro",
  },
  {
    label: "Gaming",
    iconName: "puzzle",
  },
  {
    label: "Movies",
    iconName: "movie",
  },
  {
    label: "News",
    iconName: "news",
  },
  {
    label: "Live",
    iconName: "translation",
  },
  {
    label: "360° Video",
    iconName: "eye",
  },
];

export const browseChannel: IItem[] = [
  {
    label: "Browse channels",
    iconName: "plus",
  },
];

export const moreFrom: IItem[] = [
  {
    label: "YouTube Premium",
    iconName: "play",
  },
  {
    label: "Live",
    iconName: "translation",
  },
];

export const moreFrom2: IItem[] = [
  {
    label: "Settings",
    iconName: "settings",
  },
  {
    label: "Report history",
    iconName: "report",
  },
  {
    label: "Help",
    iconName: "help",
  },
  {
    label: "Send feedback",
    iconName: "feedback",
  },
];

export const submenu1: ISubItem[] = [
  {
    label: "About",
  },
  {
    label: "Press",
  },
  {
    label: "Copyright",
  },
  {
    label: "Contact us",
  },
  {
    label: "Creators",
  },
  {
    label: "Advertise",
  },
  {
    label: "Developers",
  },
];

export const submenu2: ISubItem[] = [
  {
    label: "Terms",
  },
  {
    label: "Privacy",
  },
  {
    label: "Policy & Safety",
  },
  {
    label: "How YouTube works",
  },
  {
    label: "Test new features",
  },
];
