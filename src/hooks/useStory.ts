import { useContext } from "react";
import { SidebarContext } from "@src/context/SidebarContext";

export const useStory = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("необходимо добавить провайдер");
  }
  return context;
};
