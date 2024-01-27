import { ReactNode, useMemo, useState } from "react";

import { SidebarContext, ISidebarContext } from "@src/context/SidebarContext";

interface SidebarProviderProps {
  children: ReactNode;
}

const SidebarProvider = (props: SidebarProviderProps) => {
  const { children } = props;
  const [stateBar, setStateBar] = useState<boolean>(false);

  const defaultProps: ISidebarContext = useMemo(
    () => ({
      stateBar,
      setStateBar,
    }),
    [stateBar],
  );

  return (
    <SidebarContext.Provider value={defaultProps}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
