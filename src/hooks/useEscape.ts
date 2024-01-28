import { useStory } from "@src/hooks/useStory";
import { useEffect } from "react";

export const useEscape = () => {
  const { setStateBar } = useStory();

  useEffect(() => {
    const keydown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setStateBar((prev) => ({
          ...prev,
          opened: false,
        }));
      }
    };

    document.addEventListener("keydown", keydown);

    return () => {
      document.removeEventListener("keydown", keydown);
    };
  }, [setStateBar]);
};
