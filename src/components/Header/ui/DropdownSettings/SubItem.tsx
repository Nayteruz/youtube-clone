import { Dispatch, FC, memo, MouseEvent, SetStateAction } from "react";
import { BaseIcon } from "@src/shared/Icons";
import { IActiveItem, IDropdownSubitem } from "../../model/types";

interface ISubItemProps {
  item: IDropdownSubitem;
  menuId: string;
  activeSubItems: IActiveItem[];
  setActiveSubItems: Dispatch<SetStateAction<IActiveItem[]>>;
}

export const SubItem: FC<ISubItemProps> = memo(
  ({ item, activeSubItems, setActiveSubItems, menuId }) => {
    const { label, link, id } = item;

    const changeSubItemMenu = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const actives = activeSubItems.filter(
        (activeSubItem) => activeSubItem.menuId !== menuId,
      );

      setActiveSubItems([...actives, { menuId, subMenuId: id }]);
    };

    const isActive = activeSubItems.find(
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
  },
);

SubItem.displayName = "ListItemSubmenu";
