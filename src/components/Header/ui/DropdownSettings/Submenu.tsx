import { FC, memo } from "react";
import { SubItem } from "./SubItem";
import { SubmenuHeader } from "./SubmenuHeader";
import { useMenu } from "@src/hooks/useMenu";

export const Submenu: FC = memo(() => {
  const { subMenu } = useMenu();
  return (
    <>
      <SubmenuHeader label={subMenu?.label || ""} />
      <section className="py-2">
        {subMenu?.description && (
          <div className="text-gray-500 text-xs p-3">{subMenu.description}</div>
        )}
        <ul>
          {subMenu?.submenu?.map((subitem) => (
            <SubItem key={subitem.id} item={subitem} menuId={subMenu.id} />
          ))}
        </ul>
      </section>
    </>
  );
});

Submenu.displayName = "Submenu";
