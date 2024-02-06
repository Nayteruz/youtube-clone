import { FC, memo } from "react";
import { useMenu } from "@src/hooks/useMenu";
import { Appearance } from "./SubMenus/Appearance";
import { Language } from "./SubMenus/Language";
import { Location } from "./SubMenus/Location";
import { Restricted } from "./SubMenus/Restricted";
import { Main } from "./SubMenus/Main";

const subMenu = {
  appearance: Appearance,
  language: Language,
  location: Location,
  restricted: Restricted,
};

export const Menu: FC = memo(() => {
  const { menuId } = useMenu();
  const subMenuId = menuId as keyof typeof subMenu;
  const SubMenu = menuId ? subMenu[subMenuId] : null;

  return <>{!menuId ? <Main /> : SubMenu && <SubMenu />}</>;
});

Menu.displayName = "Menu";
