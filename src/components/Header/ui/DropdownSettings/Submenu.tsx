import { BaseIcon } from "@src/shared/Icons";
import { IDropdownSettingsItem } from "../../model/types";
import { FC, memo, MouseEvent } from "react";
import { ListItemSubmenu } from "@src/components/Header/ui/DropdownSettings/ListItemSubmenu";

interface ISubmenuProps {
  item: IDropdownSettingsItem;
  setActive: (nullItem: null) => void;
  changeSubItem: (item: IDropdownSettingsItem) => void;
}

export const Submenu: FC<ISubmenuProps> = memo(
  ({ item, setActive, changeSubItem }) => {
    const setActiveNull = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setActive(null);
    };

    return (
      <ul>
        <li className="border-b flex items-center px-4 py-2 gap-2 font-semibold">
          <span onClick={setActiveNull}>
            <BaseIcon icon="chevronLeft" />
          </span>
          <span>{item.label}</span>
        </li>
        {item?.description && (
          <li className="text-sm px-4 py-2">{item.description}</li>
        )}
        {item?.submenu?.map((subitem) => (
          <ListItemSubmenu
            key={subitem.label}
            item={subitem}
            changeSubItem={changeSubItem}
          />
        ))}
      </ul>
    );
  },
);

Submenu.displayName = "Submenu";
