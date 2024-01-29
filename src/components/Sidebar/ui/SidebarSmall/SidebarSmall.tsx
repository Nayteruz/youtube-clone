import { smallSidebar } from "../../model/content";
import { ListItem } from "./ListItem";

export const SidebarSmall = () => {
  return (
    <aside className="min-h-screen hidden md:block overflow-auto fixed top-0 pt-14 bg-white z-20">
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
