import { FC } from "react";
import { ISectionHeadingProps } from "../../SidebarContent/model/types";

export const SectionHeading: FC<ISectionHeadingProps> = ({ label }) => {
  return (
    <div className="uppercase text-sm font-semibold px-6 py-2">{label}</div>
  );
};
