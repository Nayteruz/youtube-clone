import { FC, memo, MouseEvent } from "react";
import { IDropdownItem } from "../../model/types";
import { BaseIcon } from "@src/shared/Icons";
import { useMenu } from "@src/hooks/useMenu";
import { ISelected } from "@src/context/MenuContext";

interface IDropdownSettingsItemProps {
  item: IDropdownItem;
}

export const ListItem: FC<IDropdownSettingsItemProps> = memo(({ item }) => {
  const { setMenuId } = useMenu();
  const { submenu, label, iconName, link, border, id } = item;

  const setActiveSubmenu = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (submenu) {
      setMenuId(id as keyof ISelected);
    }
  };

  return (
    <li className={`${border ? "mt-2 pt-2 border-t" : ""}`}>
      <a
        href={link || "#"}
        className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
        onClick={setActiveSubmenu}
      >
        {iconName && (
          <BaseIcon icon={iconName} className="w-6 h-6 mr-3 text-gray-400" />
        )}
        <span>{label}</span>
        {submenu && (
          <span className="ml-auto">
            <BaseIcon icon="chevronRight" className="w-5 h-5 text-gray-400" />
          </span>
        )}
      </a>
    </li>
  );
});

ListItem.displayName = "ListItem";
