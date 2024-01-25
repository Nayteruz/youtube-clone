import { FC, ReactNode } from "react";

interface ICategoriesItemProps {
  href: string;
  children: ReactNode;
  isActive?: boolean;
}

export const CategoriesItem: FC<ICategoriesItemProps> = ({
  href = "#",
  isActive,
  children,
}) => {
  const activeCategoryClass = isActive
    ? "bg-gray-600 border-gray-700 hover:bg-gray-500 text-white"
    : "bg-gray-100 border-gray-300 hover:bg-gray-200";

  return (
    <a
      href={href}
      className={`px-3 py-1 transition border rounded-full ${activeCategoryClass}`}
    >
      {children}
    </a>
  );
};
