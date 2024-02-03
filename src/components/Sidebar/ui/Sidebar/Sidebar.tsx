import { Content } from "../Content";

export const Sidebar = () => {
  return (
    <aside
      className="w-64 max-h-screen overflow-auto fixed top-14 bottom-0 bg-white z-30"
      style={{
        scrollbarColor: "#d1d5db transparent",
        scrollbarWidth: "thin",
      }}
    >
      <Content />
    </aside>
  );
};
