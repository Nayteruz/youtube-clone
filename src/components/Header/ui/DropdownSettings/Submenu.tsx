import { BaseIcon } from "@src/shared/Icons";
import { IActiveItem, IDropdownItem } from "../../model/types";
import { Dispatch, FC, memo, MouseEvent, SetStateAction } from "react";
import { SubItem } from "./SubItem";

interface ISubmenuProps {
  item: IDropdownItem;
  setActiveItem: (nullItem: null) => void;
  activeSubItems: IActiveItem[];
  setActiveSubItems: Dispatch<SetStateAction<IActiveItem[]>>;
}

export const Submenu: FC<ISubmenuProps> = memo(
  ({ item, setActiveItem, activeSubItems, setActiveSubItems }) => {
    const setActiveNull = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setActiveItem(null);
    };

    return (
      <>
        <section className="flex border-b border-gray-200 text-black">
          <button onClick={setActiveNull} className="px-3 focus:outline-none">
            <BaseIcon icon="chevronLeft" className="w-5 h-5" />
          </button>
          <span className="py-3">{item.label}</span>
        </section>
        <section className="py-2">
          {item?.description && (
            <div className="text-gray-500 text-xs p-3">{item.description}</div>
          )}
          <ul>
            {item?.submenu?.map((subitem) => (
              <SubItem
                key={subitem.id}
                item={subitem}
                menuId={item.id}
                activeSubItems={activeSubItems}
                setActiveSubItems={setActiveSubItems}
              />
            ))}
          </ul>
        </section>
      </>
    );
  },
);

Submenu.displayName = "Submenu";
