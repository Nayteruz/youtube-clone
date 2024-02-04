import { menuSettings } from "../../model/settings";
import { ListItem } from "./ListItem";
import { FC, memo } from "react";
import { useMenu } from "@src/hooks/useMenu";
import { Appearance } from "./SubMenus/Appearance";
import { Language } from "./SubMenus/Language";
import { Location } from "./SubMenus/Location";
import { Restricted } from "./SubMenus/Restricted";

export const Menu: FC = memo(() => {
  const { menuId } = useMenu();

  if (!menuSettings || !menuSettings.length) {
    return null;
  }

  return (
    <>
      {menuSettings && menuSettings.length > 0 && !menuId && (
        <section className="py-2 border-b">
          <ul>
            {menuSettings.map((item) => (
              <ListItem key={item.id} item={item} />
            ))}
          </ul>
        </section>
      )}
      {menuId === "appearance" && <Appearance />}
      {menuId === "language" && <Language />}
      {menuId === "location" && <Location />}
      {menuId === "restricted" && <Restricted />}
    </>
  );
});

Menu.displayName = "Menu";
