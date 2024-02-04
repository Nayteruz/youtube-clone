import { BaseIcon } from "@src/shared/Icons";
import { FC, MouseEvent } from "react";
import { useMenu } from "@src/hooks/useMenu";

interface ISubmenuHeaderProps {
  label: string;
}

export const SubmenuHeader: FC<ISubmenuHeaderProps> = ({ label }) => {
  const { setMenuId } = useMenu();
  const setActiveNull = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMenuId(null);
  };

  return (
    <section className="flex border-b border-gray-200 text-black">
      <button onClick={setActiveNull} className="px-3 focus:outline-none">
        <BaseIcon icon="chevronLeft" className="w-5 h-5" />
      </button>
      <span className="py-3">{label}</span>
    </section>
  );
};
