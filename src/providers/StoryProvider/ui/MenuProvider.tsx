import { ReactNode, useMemo, useState } from "react";

import {
  MenuAppsContext,
  IAppsContext,
  IActiveItem,
  TMenuIds,
} from "@src/context/MenuContext";

interface SidebarProviderProps {
  children: ReactNode;
}

const MenuAppsProvider = (props: SidebarProviderProps) => {
  const { children } = props;
  const [activeItems, setActiveItems] = useState<IActiveItem[]>([]);
  const [menuId, setMenuId] = useState<TMenuIds | null>(null);

  const defaultProps: IAppsContext = useMemo(
    () => ({
      activeItems,
      setActiveItems,
      menuId,
      setMenuId,
    }),
    [activeItems, menuId],
  );

  return (
    <MenuAppsContext.Provider value={defaultProps}>
      {children}
    </MenuAppsContext.Provider>
  );
};

export default MenuAppsProvider;
