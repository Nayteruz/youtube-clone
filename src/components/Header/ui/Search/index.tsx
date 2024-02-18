import { Search } from "./Search";
import { FC, useEffect } from "react";
import { BaseIcon } from "@src/shared/Icons";
import { BaseTooltip } from "@src/shared/ui/BaseTooltip";

interface ISearchWrapperProps {
  isSmallScreen: boolean;
  closeMobileSearch: () => void;
}

export const SearchWrapper: FC<ISearchWrapperProps> = ({
  isSmallScreen,
  closeMobileSearch,
}) => {
  const classes = isSmallScreen
    ? "absolute w-full p-2 z-10 flex"
    : "hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 flex-1 lg:px-0 lg:w-1/2 max-w-screen-md";

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el.closest("#searchWrapper")) {
        closeMobileSearch();
      }
    };

    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [closeMobileSearch]);

  return (
    <div className={classes} id="searchWrapper">
      {isSmallScreen && (
        <BaseTooltip textLabel="Back" left={true}>
          <button
            onClick={closeMobileSearch}
            className="mr-2 p-2 focus:outline-none"
          >
            <BaseIcon icon="chevronLeft" />
          </button>
        </BaseTooltip>
      )}
      <Search />
      <BaseTooltip textLabel="Search with your voice" right={true}>
        <button className="p-2 focus:outline-none">
          <BaseIcon icon={"microphone"} className="w-5 h-5" />
        </button>
      </BaseTooltip>
    </div>
  );
};
