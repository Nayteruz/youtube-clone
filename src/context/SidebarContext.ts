import { createContext, Dispatch, SetStateAction } from "react";

export type TView = "compact" | "normal";

export interface IStateSidebar {
  opened: boolean;
  view: TView;
}

export interface ISidebarContext {
  stateBar: IStateSidebar;
  setStateBar: Dispatch<SetStateAction<IStateSidebar>>;
}

export const SidebarContext = createContext<ISidebarContext>(
  {} as ISidebarContext,
);
