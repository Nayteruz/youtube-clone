import { SidebarContent } from "@src/components/SidebarContent";

export const Sidebar = () => {
  return (
    <aside className="hidden xl:block w-64 max-h-screen overflow-auto fixed top-0 pt-12 bg-white z-20">
      <SidebarContent />
    </aside>
  );
};
