import { createContext } from "react";

export interface ISidebarContext {
  stateBar: boolean;
  setStateBar: (value: boolean) => void;
}

export const SidebarContext = createContext<ISidebarContext | undefined>(
  undefined,
);
