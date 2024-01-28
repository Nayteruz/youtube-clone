import { Content } from "../Content";
import { useStory } from "@src/hooks/useStory";

export const Sidebar = () => {
  const { stateBar } = useStory();

  const isBlock = stateBar.view === "normal" ? "xl:block" : "";

  return (
    <aside
      className={`${isBlock} hidden w-64 max-h-screen overflow-auto fixed top-0 pt-12 bg-white z-20`}
    >
      <Content />
    </aside>
  );
};
