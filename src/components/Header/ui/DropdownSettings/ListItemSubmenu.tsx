import { FC, memo, MouseEvent } from "react";

interface IListItemSubmenu {
  label: string;
  link?: string;
}

interface IListItemSubmenuProps {
  item: IListItemSubmenu;
  changeSubItem: (item: IListItemSubmenu) => void;
}

export const ListItemSubmenu: FC<IListItemSubmenuProps> = memo(
  ({ item, changeSubItem }) => {
    const { label, link } = item;

    const changeSubItemMenu = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      changeSubItem(item);
    };

    return (
      <li>
        <a
          href={link || "#"}
          className="flex items-center px-4 py-2 text-sm hover:bg-gray-100"
          onClick={changeSubItemMenu}
        >
          <span>{label}</span>
        </a>
      </li>
    );
  },
);

ListItemSubmenu.displayName = "ListItemSubmenu";
