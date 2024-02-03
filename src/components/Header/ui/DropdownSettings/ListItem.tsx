import { FC, memo, MouseEvent } from "react";
import { BaseIcon } from "@src/shared/Icons";
import { IDropdownSettingsItem } from "../../model/types";

interface IDropdownSettingsItemProps {
  item: IDropdownSettingsItem;
  setActive?: (item: IDropdownSettingsItem) => void;
}

export const ListItem: FC<IDropdownSettingsItemProps> = memo(
  ({ item, setActive }) => {
    const { submenu, label, iconName, link, border } = item;

    const setActiveSubmenu = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setActive?.(item);
    };

    return (
      <li className={`${border ? "mt-2 pt-2 border-t" : ""}`}>
        <a
          href={link || "#"}
          className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
          onClick={(e) => submenu && setActiveSubmenu(e)}
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
  },
);

ListItem.displayName = "ListItem";
