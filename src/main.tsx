import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "@src/App";
import "./index.css";
import { MenuProvider, SidebarProvider } from "@src/providers/StoryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </SidebarProvider>
  </StrictMode>,
);
