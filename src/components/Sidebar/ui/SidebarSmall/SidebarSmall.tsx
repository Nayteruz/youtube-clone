import { smallSidebar } from "../../model/content";
import { ListItem } from "./ListItem";
import { useStory } from "@src/hooks/useStory";

export const SidebarSmall = () => {
  const { stateBar } = useStory();
  const isCompact = stateBar.view === "normal" ? "xl:hidden" : "";

  return (
    <aside
      className={`${isCompact} min-h-screen hidden md:block overflow-auto fixed top-0 pt-14 bg-white z-20`}
    >
      <section>
        <ul>
          {smallSidebar.length &&
            smallSidebar.map((item) => (
              <ListItem key={item.label} item={item} />
            ))}
        </ul>
      </section>
    </aside>
  );
};
