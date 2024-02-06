import { createContext, Dispatch, SetStateAction } from "react";

export interface ISelectedItem {
  id: string;
  label: string;
}

export interface ISelected {
  appearance: ISelectedItem;
  language: ISelectedItem;
  location: ISelectedItem;
  restricted: boolean;
}

export interface IAppsContext {
  menuId: keyof ISelected | null;
  setMenuId: Dispatch<SetStateAction<keyof ISelected | null>>;
  selected: ISelected;
  setSelected: Dispatch<SetStateAction<ISelected>>;
}

export const MenuAppsContext = createContext<IAppsContext>({} as IAppsContext);
