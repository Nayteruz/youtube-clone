import { Submenu } from "./Submenu";
import { submenu1, submenu2 } from "../../model/content";
import { SectionWrapper } from "@src/components/shared/ui/SectionWrapper";

export const SidebarFooter = () => {
  return (
    <SectionWrapper className="px-6 py-4 text-xs font-semibold space-y-4">
      <Submenu items={submenu1} className="mb-1" />
      <Submenu items={submenu2} className="mt-1" />
      <div className="font-normal text-gray-500">&copy; 2021 Google LLC</div>
    </SectionWrapper>
  );
};
