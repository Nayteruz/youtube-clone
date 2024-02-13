import { FC, MouseEvent } from "react";
import { BaseIcon } from "@src/shared/Icons";
import { BaseTooltip } from "@src/shared/ui/BaseTooltip";

interface IButtonSearchProps {
  selectSearchResult: () => void;
}

export const ButtonSearch: FC<IButtonSearchProps> = ({
  selectSearchResult,
}) => {
  const buttonClasses = `h-full focus:outline-none flex items-center px-6 py-1 text-gray-600 bg-gray-100 border border-l-0 border-gray-300 rounded-tr-sm rounded-br-sm hover:bg-gray-200`;

  const onClick = (e: MouseEvent) => {
    e.preventDefault();
    selectSearchResult();
  };

  return (
    <BaseTooltip textLabel="Search">
      <button onClick={onClick} className={buttonClasses}>
        <BaseIcon icon="search" className="h-5 w-5" />
      </button>
    </BaseTooltip>
  );
};
