import { createContext, Dispatch, SetStateAction } from "react";

export interface IActiveItem {
  menuId: string;
  subMenuId: string;
}

export interface IAppsContext {
  menuId: string | null;
  setMenuId: Dispatch<SetStateAction<string | null>>;
  activeItems: IActiveItem[];
  setActiveItems: Dispatch<SetStateAction<IActiveItem[]>>;
}

export const MenuAppsContext = createContext<IAppsContext>({} as IAppsContext);
