import { useStory } from "@src/hooks/useStory";
import { useEffect } from "react";

export const useViewOnResize = () => {
  const { stateBar, setStateBar } = useStory();

  if (window.innerWidth < 1280 && stateBar.view === "normal") {
    setStateBar((prev) => ({
      ...prev,
      view: "compact",
    }));
  }

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 1280 && stateBar.view === "normal") {
        setStateBar((prev) => ({
          ...prev,
          view: "compact",
        }));
      }
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [setStateBar, stateBar]);
};
