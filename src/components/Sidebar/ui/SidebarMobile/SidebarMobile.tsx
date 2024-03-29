import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import { Content } from "../Content";
import { LogoMain } from "@src/shared/ui/LogoMain";
import { SectionWrapper } from "@src/shared/ui/SectionWrapper";
import { BaseIcon } from "@src/shared/Icons";
import { useStory } from "@src/hooks/useStory";
import { useEscape } from "@src/hooks/useEscape";
import { useChangeViewSidebar } from "@src/hooks/useChangeViewSidebar";

export const SidebarMobile = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const sideRef = useRef<HTMLElement>(null);
  const { stateBar, setStateBar } = useStory();
  const { changeView } = useChangeViewSidebar();
  useEscape<HTMLElement>(sideRef, stateBar.isMobileSidebarOpen, () => {
    setStateBar((prev) => ({
      ...prev,
      isMobileSidebarOpen: false,
    }));
  });

  return (
    <>
      <CSSTransition
        nodeRef={overlayRef}
        in={stateBar.isMobileSidebarOpen}
        timeout={200}
        unmountOnExit
        classNames={{
          // появление
          enter: "opacity-0",
          enterActive:
            "opacity-100 transition-opacity ease-linear duration-200",
          // исчезновение
          exit: "transition-opacity ease-linear duration-200",
          exitActive: "opacity-0",
        }}
      >
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={changeView}
        ></div>
      </CSSTransition>
      <CSSTransition
        nodeRef={sideRef}
        in={stateBar.isMobileSidebarOpen}
        timeout={200}
        unmountOnExit
        onEntered={() => sideRef?.current?.focus()}
        classNames={{
          enter: "-translate-x-full",
          enterActive:
            "translate-x-0 transition ease-in-out duration-200 transform",
          exit: "transition ease-in-out duration-200 transform",
          exitActive: "-translate-x-full",
        }}
      >
        <aside
          ref={sideRef}
          tabIndex={-1}
          className="w-64 max-h-screen overflow-auto bg-white fixed z-40 outline-none"
        >
          <SectionWrapper className="flex items-center p-4 border-b sticky top-0 bg-white -mb-2">
            <button
              className="ml-2 mr-6 focus:outline-none"
              onClick={changeView}
            >
              <BaseIcon icon="menu" />
            </button>
            <a href="#">
              <LogoMain />
            </a>
          </SectionWrapper>
          <Content />
        </aside>
      </CSSTransition>
    </>
  );
};
