import { menuSettings } from "../../model/settings";
import { ListItem } from "./ListItem";
import { useState } from "react";
import { IDropdownSettingsItem } from "../../model/types";
import { Submenu } from "@src/components/Header/ui/DropdownSettings/Submenu";

export const MenuList = () => {
  const [activeSubmenu, setActiveSubmenu] =
    useState<IDropdownSettingsItem | null>(null);

  const setActiveItem = (item: IDropdownSettingsItem | null) => {
    setActiveSubmenu(item);
  };

  const changeSubItem = (item: IDropdownSettingsItem) => {
    console.log(item);
  };

  if (!menuSettings || !menuSettings.length) {
    return null;
  }

  return (
    <>
      {menuSettings && menuSettings.length > 0 && !activeSubmenu && (
        <section className="py-2 border-b">
          <ul>
            {menuSettings.map((item) => (
              <ListItem
                key={item.label}
                item={item}
                setActive={setActiveItem}
              />
            ))}
          </ul>
        </section>
      )}
      {activeSubmenu && (
        <Submenu
          item={activeSubmenu}
          setActive={setActiveItem}
          changeSubItem={changeSubItem}
        />
      )}
    </>
  );
};
