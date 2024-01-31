import { BaseIcon } from "@src/shared/Icons";
import { BaseTooltip } from "@src/shared/ui/BaseTooltip";

export const ButtonSearch = () => {
  return (
    <BaseTooltip textLabel="Search">
      <button className="h-full focus:outline-none flex items-center px-6 py-1 text-gray-600 bg-gray-100 border border-l-0 border-gray-300 rounded-tr-sm rounded-br-sm hover:bg-gray-200">
        <BaseIcon icon="search" className="h-5 w-5" />
      </button>
    </BaseTooltip>
  );
};
