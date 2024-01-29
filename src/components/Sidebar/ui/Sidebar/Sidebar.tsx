import { Content } from "../Content";

export const Sidebar = () => {
  return (
    <aside className="w-64 max-h-screen overflow-auto fixed top-0 pt-12 bg-white z-20">
      <Content />
    </aside>
  );
};
