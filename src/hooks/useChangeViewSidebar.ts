import { useStory } from "@src/hooks/useStory";

export const useChangeViewSidebar = () => {
  const { setStateBar } = useStory();

  const changeView = () => {
    // window.innerWidth >= 768 && window.innerWidth < 1280
    if (window.innerWidth < 1280) {
      setStateBar((prev) => ({
        ...prev,
        opened: !prev.opened,
      }));
    }

    if (window.innerWidth > 1280) {
      setStateBar((prev) => ({
        ...prev,
        view: prev.view === "compact" ? "normal" : "compact",
      }));
    }
  };

  return { changeView };
};
