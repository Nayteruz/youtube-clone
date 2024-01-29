import { useStory } from "@src/hooks/useStory";

export const useChangeViewSidebar = () => {
  const { setStateBar } = useStory();

  const changeView = () => {
    if (window.innerWidth < 1280) {
      setStateBar((prev) => ({
        ...prev,
        isMobileSidebarOpen: !prev.isMobileSidebarOpen,
      }));
    }

    if (window.innerWidth > 1280) {
      setStateBar((prev) => ({
        ...prev,
        isCompactSidebarOpen: !prev.isCompactSidebarOpen,
        isSidebarOpen: !prev.isSidebarOpen,
      }));
    }
  };

  return { changeView };
};
