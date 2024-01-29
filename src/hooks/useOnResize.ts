import { useEffect } from "react";
import { useStory } from "@src/hooks/useStory";

export const useOnResize = () => {
  const { setStateBar } = useStory();

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 768) {
        setStateBar((prev) => ({
          ...prev,
          isCompactSidebarOpen: false,
          isSidebarOpen: false,
        }));
      } else if (window.innerWidth < 1280) {
        setStateBar((prev) => ({
          ...prev,
          isCompactSidebarOpen: true,
          isSidebarOpen: false,
        }));
      } else {
        setStateBar((prev) => ({
          ...prev,
          isCompactSidebarOpen: prev.isCompactSidebarActive,
          isSidebarOpen: !prev.isCompactSidebarActive,
          isMobileSidebarOpen: false,
        }));
      }
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [setStateBar]);
};
