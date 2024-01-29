import { useStory } from "@src/hooks/useStory";
import { RefObject, useEffect } from "react";

export const useEscape = <T>(
  ref: RefObject<T>,
  changeState: boolean,
  callback: () => void,
) => {
  const { setStateBar } = useStory();

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const keydown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        callback();
      }
    };

    (element as any).addEventListener("keydown", keydown);

    return () => {
      (element as any).removeEventListener("keydown", keydown);
    };
  }, [ref, setStateBar, changeState, callback]);
};
