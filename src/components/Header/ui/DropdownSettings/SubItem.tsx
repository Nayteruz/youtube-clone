import { FC, memo, MouseEvent } from "react";
import { BaseIcon } from "@src/shared/Icons";
import { IDropdownSubitem } from "../../model/types";
import { useMenu } from "@src/hooks/useMenu";

interface ISubItemProps {
  item: IDropdownSubitem;
}

export const SubItem: FC<ISubItemProps> = memo(({ item }) => {
  const { label, link, id } = item;
  const { activeItems, setActiveItems, menuId } = useMenu();

  const changeSubItemMenu = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const actives = activeItems.filter(
      (activeItem) => activeItem.menuId !== menuId,
    );

    setActiveItems([...actives, { menuId: menuId || "", subMenuId: id }]);
  };

  const isActive = activeItems.find(
    (active) => active.menuId === menuId && active.subMenuId === item.id,
  );

  return (
    <li>
      <a
        href={link || "#"}
        className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 gap-2"
        onClick={changeSubItemMenu}
      >
        <span className="w-6 h-6">
          <BaseIcon
            icon="check"
            className={`${isActive ? "opacity-100" : "opacity-20"}`}
          />
        </span>
        <span>{label}</span>
      </a>
    </li>
  );
});

SubItem.displayName = "ListItemSubmenu";
