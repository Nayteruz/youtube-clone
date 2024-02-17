import { MouseEvent, useEffect, useState } from "react";
import { BaseIcon } from "@src/shared/Icons";
import { LogoMain } from "@src/shared/ui/LogoMain";
import { ButtonLogin } from "@src/shared/ui/ButtonLogin";
import { useChangeViewSidebar } from "@src/hooks/useChangeViewSidebar";
import { DropdownApps } from "./DropdownApps";
import { DropdownSettings } from "./DropdownSettings";
import { BaseTooltip } from "@src/shared/ui/BaseTooltip";
import { SearchWrapper } from "@src/components/Header/ui/SearchWrapper";

const SMALL_SCREEN_WIDTH = 640;

export const Header = () => {
  const { changeView } = useChangeViewSidebar();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  const isMobileSearchShown = isSmallScreen && isMobileSearchActive;
  const isSearchShown = isMobileSearchShown || !isSmallScreen;
  const classes = `flex justify-between w-full z-30 relative`;

  const mobileSearchShow = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileSearchActive(true);
  };

  const closeMobileSearch = () => {
    setIsMobileSearchActive(false);
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < SMALL_SCREEN_WIDTH) {
        setIsSmallScreen(true);
        return;
      }
      closeMobileSearch();
      setIsSmallScreen(false);
    };
    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className={classes}>
      <div
        className={`lg:w-1/4 flex ${isMobileSearchActive ? "opacity-0" : "opacity-100"}`}
      >
        <div className="flex items-center xl:w-64 xl:bg-white pl-4">
          <button
            className="mr-3 sm:ml-2 sm:mr-6 focus:outline-none"
            onClick={changeView}
          >
            <BaseIcon icon="menu" className="w-6 h-6" />
          </button>
          <a href="#">
            <LogoMain />
          </a>
        </div>
      </div>
      {isSearchShown && (
        <SearchWrapper
          isSmallScreen={isSmallScreen}
          closeMobileSearch={closeMobileSearch}
        />
      )}
      <div
        className={`flex items-center justify-end lg:w-1/4 sm:space-x-3 p-2 sm:px-4 ${isMobileSearchActive ? "opacity-0" : "opacity-100"}`}
      >
        <BaseTooltip textLabel="Search with your voice">
          <button className="sm:hidden p-2 focus:outline-none">
            <BaseIcon icon="microphone" className="w-5 h-5" />
          </button>
        </BaseTooltip>
        <BaseTooltip textLabel="Search">
          <button
            onClick={mobileSearchShow}
            className="sm:hidden p-2 focus:outline-none mobile-search"
          >
            <BaseIcon icon="search" className="w-5 h-5" />
          </button>
        </BaseTooltip>
        <DropdownApps />
        <DropdownSettings />
        <ButtonLogin className="whitespace-nowrap py-1" />
      </div>
    </header>
  );
};
