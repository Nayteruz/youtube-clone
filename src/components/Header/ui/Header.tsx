import { BaseIcon } from "@src/shared/Icons";
import { LogoMain } from "@src/shared/ui/LogoMain";
import { ButtonLogin } from "@src/shared/ui/ButtonLogin";
import { Search } from "./Search";
import { useChangeViewSidebar } from "@src/hooks/useChangeViewSidebar";
import { DropdownApps } from "./DropdownApps";
import { DropdownSettings } from "./DropdownSettings";
import { BaseTooltip } from "@src/shared/ui/BaseTooltip";
import { SearchMobile } from "@src/components/Header/ui/SearchMobile";
import { useEffect, useState } from "react";

const SMALL_SCREEN_WIDTH = 640;

export const Header = () => {
  const { changeView } = useChangeViewSidebar();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);
  const searchShown = isSmallScreen && isMobileSearchActive;
  const classes = `flex justify-between w-full z-30 relative`;

  useEffect(() => {
    const changeScreen = () => {
      setIsSmallScreen(window.innerWidth < SMALL_SCREEN_WIDTH);
      if (window.innerWidth > SMALL_SCREEN_WIDTH) {
        setIsMobileSearchActive(false);
      }
    };
    changeScreen();

    window.addEventListener("resize", changeScreen);

    return () => {
      window.removeEventListener("resize", changeScreen);
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
      {searchShown && <SearchMobile changeActive={setIsMobileSearchActive} />}
      <div className="hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 flex-1 lg:px-0 lg:w-1/2 max-w-screen-md">
        <Search />
        <BaseTooltip textLabel="Search with your voice">
          <button className="p-2 focus:outline-none">
            <BaseIcon icon={"microphone"} className="w-5 h-5" />
          </button>
        </BaseTooltip>
      </div>
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
            onClick={() => setIsMobileSearchActive(true)}
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
