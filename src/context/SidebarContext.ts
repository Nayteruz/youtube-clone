import { createContext, Dispatch, SetStateAction } from "react";

export interface IStateSidebar {
  isCompactSidebarOpen: boolean;
  isSidebarOpen: boolean;
  isCompactSidebarActive: boolean;
  isMobileSidebarOpen: boolean;
}

export interface ISidebarContext {
  stateBar: IStateSidebar;
  setStateBar: Dispatch<SetStateAction<IStateSidebar>>;
}

export const SidebarContext = createContext<ISidebarContext>(
  {} as ISidebarContext,
);
