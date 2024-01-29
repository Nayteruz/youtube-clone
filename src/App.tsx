import { Header } from "@src/components/Header";
import { Categories } from "@src/components/Categories";
import { Videos } from "@src/components/Videos";
import { SidebarSmall, Sidebar, SidebarMobile } from "@src/components/Sidebar";
import { useStory } from "@src/hooks/useStory";
import { useOnResize } from "@src/hooks/useOnResize";

function App() {
  const { stateBar } = useStory();
  useOnResize();

  return (
    <>
      <Header />
      <Categories />
      {stateBar.isCompactSidebarOpen && <SidebarSmall />}
      {stateBar.isSidebarOpen && <Sidebar />}
      <SidebarMobile />
      <Videos />
    </>
  );
}

export default App;
