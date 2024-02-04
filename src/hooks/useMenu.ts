import { useContext } from "react";
import { MenuAppsContext } from "@src/context/MenuContext";

export const useMenu = () => {
  const context = useContext(MenuAppsContext);

  if (!context) {
    throw new Error("необходимо добавить провайдер");
  }
  return context;
};
