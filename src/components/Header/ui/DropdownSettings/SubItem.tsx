import { FC, memo, MouseEvent } from "react";
import { BaseIcon } from "@src/shared/Icons";
import { IDropdownSubitem } from "../../model/types";
import { useMenu } from "@src/hooks/useMenu";
import { ISelectedItem } from "@src/context/MenuContext";

interface ISubItemProps {
  item: IDropdownSubitem;
}

export const SubItem: FC<ISubItemProps> = memo(({ item }) => {
  const { label, link, id } = item;
  const { selected, setSelected, menuId } = useMenu();

  const changeSubItemMenu = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (menuId) {
      setSelected((prev) => ({ ...prev, [menuId]: { id, label } }));
    }
  };

  if (!menuId) {
    return;
  }

  const selectedMenu: ISelectedItem = selected[menuId] as ISelectedItem;

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
            className={`${selectedMenu.id === id ? "opacity-100" : "opacity-20"}`}
          />
        </span>
        <span className="truncate flex-1">{label}</span>
      </a>
    </li>
  );
});

SubItem.displayName = "ListItemSubmenu";
