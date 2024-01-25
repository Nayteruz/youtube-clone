import { FC } from "react";

interface ISectionHeadingProps {
  label: string;
}

export const SectionHeading: FC<ISectionHeadingProps> = ({ label }) => {
  return (
    <div className="uppercase text-sm font-semibold px-6 py-2">{label}</div>
  );
};
