import { FC, ReactNode } from "react";

interface ISidebarSectionProps {
  children: ReactNode;
  className?: string;
}

export const SectionWrapper: FC<ISidebarSectionProps> = ({
  children,
  className = "py-2 border-b",
}) => {
  return <section className={className}>{children}</section>;
};
