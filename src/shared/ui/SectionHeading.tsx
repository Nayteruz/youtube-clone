import { FC } from "react";

interface IHeadingProps {
  label: string;
}

export const SectionHeading: FC<IHeadingProps> = ({ label }) => {
  return (
    <div className="uppercase text-sm font-semibold px-6 py-2">{label}</div>
  );
};
