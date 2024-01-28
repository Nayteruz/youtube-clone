import { ReactNode } from "react";

export interface ICategoriesItemProps {
  href: string;
  children: ReactNode;
  isActive?: boolean;
}

export interface ICategoryItem {
  label: string;
  link?: string;
  isActive?: boolean;
}
