import { ReactNode } from "react";

export interface ICategoriesItemProps {
  href: string;
  children: ReactNode;
  isActive?: boolean;
}
