import { ReactNode, useMemo, useState } from "react";

import {
  MenuAppsContext,
  IAppsContext,
  ISelected,
} from "@src/context/MenuContext";

interface SidebarProviderProps {
  children: ReactNode;
}

const MenuAppsProvider = (props: SidebarProviderProps) => {
  const { children } = props;
  const [selected, setSelected] = useState<ISelected>({
    appearance: {
      id: "1",
      label: "Device theme",
    },
    language: {
      id: "1",
      label: "Russian",
    },
    location: {
      id: "1",
      label: "Russia",
    },
    restricted: false,
  });
  const [menuId, setMenuId] = useState<keyof ISelected | null>(null);

  const defaultProps: IAppsContext = useMemo(
    () => ({
      selected,
      setSelected,
      menuId,
      setMenuId,
    }),
    [selected, menuId],
  );

  return (
    <MenuAppsContext.Provider value={defaultProps}>
      {children}
    </MenuAppsContext.Provider>
  );
};

export default MenuAppsProvider;
