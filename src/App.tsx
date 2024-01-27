import { Header } from "@src/components/Header";
import { Categories } from "@src/components/Categories";
import { Videos } from "@src/components/Videos";
import { SidebarSmall, Sidebar, SidebarMobile } from "@src/components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <SidebarSmall />
      <Sidebar />
      <SidebarMobile />
      <Categories />
      <Videos />
    </>
  );
}

export default App;
