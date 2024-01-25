import { Header } from "@src/components/Header";
import { SidebarSmall } from "@src/components/SidebarSmall";

import { SidebarMobile } from "@src/components/SidebarMobile";
import { Categories } from "@src/components/Categories";
import { Videos } from "@src/components/Videos";
import { Sidebar } from "@src/components/Sidebar";

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
