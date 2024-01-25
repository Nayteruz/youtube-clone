import { SectionWrapper } from "@src/components/SectionWrapper";
import { SidebarContent } from "@src/components/SidebarContent";
import { LogoMain } from "@src/components/LogoMain";
import { BaseIcon } from "@src/components/Icons";
import { SidebarMobileOverlay } from "@src/components/SidebarMobileOverlay";

export const SidebarMobile = () => {
  return (
    <SidebarMobileOverlay>
      <aside className="w-64 max-h-screen overflow-auto bg-white">
        <SectionWrapper className="flex items-center p-4 border-b sticky top-0 bg-white -mb-2">
          <button className="ml-2 mr-6 focus:outline-none">
            <BaseIcon icon="menu" />
          </button>
          <a href="#">
            <LogoMain />
          </a>
        </SectionWrapper>
        <SidebarContent />
      </aside>
    </SidebarMobileOverlay>
  );
};
