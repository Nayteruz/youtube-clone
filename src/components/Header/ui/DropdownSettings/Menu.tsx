import { menuSettings } from "../../model/settings";
import { ListItem } from "./ListItem";
import { memo, useState } from "react";
import { IActiveItem, IDropdownItem } from "../../model/types";
import { Submenu } from "./Submenu";

export const Menu = memo(() => {
  const [activeSubmenu, setActiveSubmenu] = useState<IDropdownItem | null>(
    null,
  );
  const [activeSubItems, setActiveSubItems] = useState<IActiveItem[]>([]);

  const setActiveItem = (item: IDropdownItem | null) => {
    setActiveSubmenu(item);
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
              <ListItem key={item.id} item={item} setActive={setActiveItem} />
            ))}
          </ul>
        </section>
      )}
      {activeSubmenu && (
        <Submenu
          item={activeSubmenu}
          setActiveItem={setActiveItem}
          activeSubItems={activeSubItems}
          setActiveSubItems={setActiveSubItems}
        />
      )}
    </>
  );
});

Menu.displayName = "Menu";
