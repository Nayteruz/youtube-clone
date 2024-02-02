import { Search } from "@src/components/Header/ui/Search";
import { BaseIcon } from "@src/shared/Icons";
import { BaseTooltip } from "@src/shared/ui/BaseTooltip";
import { Dispatch, FC, SetStateAction, useEffect } from "react";

interface ISearchMobileProps {
  changeActive: Dispatch<SetStateAction<boolean>>;
}

export const SearchMobile: FC<ISearchMobileProps> = ({ changeActive }) => {
  useEffect(() => {
    const changeClickOutside = ({ target }: MouseEvent) => {
      const element = target as HTMLElement;
      if (!element.closest(".mobile-search")) {
        changeActive(false);
      }
    };

    window.addEventListener("click", changeClickOutside);

    return () => {
      window.addEventListener("click", changeClickOutside);
    };
  }, [changeActive]);

  return (
    <div className="flex absolute h-14 p-2 w-full z-10 mobile-search">
      <BaseTooltip textLabel="Back" left={true}>
        <button
          onClick={() => changeActive(false)}
          className="mr-2 p-2 focus:outline-none"
        >
          <BaseIcon icon="chevronLeft" />
        </button>
      </BaseTooltip>
      <Search />
      <BaseTooltip textLabel="Search with your voice" right={true}>
        <button className="p-2 focus:outline-none">
          <BaseIcon icon={"microphone"} className="w-5 h-5" />
        </button>
      </BaseTooltip>
    </div>
  );
};
