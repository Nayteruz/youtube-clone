import { categories } from "../model/data";
import { memo } from "react";
import { Item } from "@src/components/Categories/ui/Item";
import { useStory } from "@src/hooks/useStory";

export const Categories = memo(() => {
  const { stateBar } = useStory();
  const normalClasses = "md:pl-24";
  const isCompact =
    stateBar.isCompactSidebarOpen || stateBar.isCompactSidebarActive
      ? "xl:pl-24"
      : "xl:pl-64";

  return (
    <section className={`${isCompact} ${normalClasses}`}>
      <div className="border-t border-b px-4 m-auto">
        <div className="py-3 flex space-x-3 overflow-auto text-sm whitespace-nowrap">
          {categories.map((category) => (
            <Item key={category.label} item={category} />
          ))}
        </div>
      </div>
    </section>
  );
});

Categories.displayName = "Categories";
