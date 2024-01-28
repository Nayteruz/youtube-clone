import { FC, memo } from "react";
import { ICategoryItem } from "@src/components/Categories/model/types";

interface ItemProps {
  item: ICategoryItem;
}

export const Item: FC<ItemProps> = memo(({ item }) => {
  const { link, label, isActive } = item;
  const activeClass = isActive
    ? "bg-gray-600 border-gray-700 hover:bg-gray-500 text-white"
    : "bg-gray-100 border-gray-300 hover:bg-gray-200";

  return (
    <a
      href={link || "#"}
      className={`px-3 py-1 transition border rounded-full ${activeClass}`}
    >
      {label}
    </a>
  );
});

Item.displayName = "CategoryItem";
