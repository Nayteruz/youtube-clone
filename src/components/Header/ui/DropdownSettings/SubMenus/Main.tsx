import { FC, memo } from "react";
import { ListItem } from "../ListItem";
import { IDropdownItem } from "../../../model/types";
import { useMenu } from "@src/hooks/useMenu";

export const Main: FC = memo(() => {
  const { selected } = useMenu();

  const list: IDropdownItem[] = [
    {
      id: "appearance",
      label: `Appearance: ${selected.appearance.label}`,
      iconName: "sun",
      submenu: true,
      description: "Settings applies to this browser only",
    },
    {
      id: "language",
      label: `Language: ${selected.language.label}`,
      iconName: "lang",
      submenu: true,
      description: "Select your language",
    },
    {
      id: "location",
      label: `Location: ${selected.location.label}`,
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
      label: `Restricted Mode: ${selected.restricted ? "on" : "off"}`,
      submenu: true,
      description: "test description",
      border: true,
    },
  ];

  return (
    <section className="py-2 border-b">
      <ul>
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
});

Main.displayName = "Main";
