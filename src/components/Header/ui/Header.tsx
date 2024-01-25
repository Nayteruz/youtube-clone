// import { DropdownApps } from "./DropdownApps";
// import { DropdownSettings } from "./DropdownSettings";
import { LogoMain } from "@src/components/LogoMain";
import { Search } from "./Search";
import { ButtonLogin } from "@src/components/ButtonLogin";
import { BaseIcon } from "@src/components/Icons";

export const Header = () => {
  return (
    <header className="flex justify-between fixed z-30 w-full">
      <div className="lg:w-1/4 flex">
        <div className="flex items-center xl:w-64 xl:bg-white pl-4">
          <button className="mr-3 sm:ml-2 sm:mr-6 focus:outline-none">
            <BaseIcon icon="menu" className="w-6 h-6" />
          </button>
          <a href="#">
            <LogoMain />
          </a>
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 flex-1 lg:px-0 lg:w-1/2 max-w-screen-md">
        <Search />
        <button className="ml-4 focus:outline-none">
          <BaseIcon icon={"microphone"} className="w-5 h-5" />
        </button>
      </div>
      <div className="flex items-center justify-end lg:w-1/4 sm:space-x-3 p-2 sm:px-4">
        <button className="sm:hidden p-2 focus:outline-none">
          <BaseIcon icon="microphone" className="w-5 h-5" />
        </button>
        <button className="sm:hidden p-2 focus:outline-none">
          <BaseIcon icon="search" className="w-5 h-5" />
        </button>
        <button className="relative group p-2 focus:outline-none">
          <BaseIcon icon="viewGrid" className="w-5 h-5" />
          {/*<DropdownApps />*/}
        </button>
        <button className="relative group p-2 focus:outline-none">
          <BaseIcon icon="dotsVertical" className="w-5 h-5" />
          {/*<DropdownSettings />*/}
        </button>
        <ButtonLogin className="whitespace-nowrap py-1" />
      </div>
    </header>
  );
};
