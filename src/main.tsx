import React from "react";
import ReactDOM from "react-dom/client";
import App from "@src/App";
import "./index.css";
import { SidebarProvider } from "@src/providers/StoryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </React.StrictMode>,
);
