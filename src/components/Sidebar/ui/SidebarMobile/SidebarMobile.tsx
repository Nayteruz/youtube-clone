import { CSSTransition } from "react-transition-group";
import { useEffect, useRef } from "react";
import { Content } from "../Content";
import { LogoMain } from "@src/components/shared/ui/LogoMain";
import { SectionWrapper } from "@src/components/shared/ui/SectionWrapper";
import { BaseIcon } from "@src/components/shared/Icons";
import { useStory } from "@src/hooks/useStory";

export const SidebarMobile = () => {
  const overlayRef = useRef(null);
  const sideRef = useRef(null);
  const { stateBar, setStateBar } = useStory();

  useEffect(() => {
    const keydown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setStateBar(false);
      }
    };

    document.addEventListener("keydown", keydown);

    return () => {
      document.removeEventListener("keydown", keydown);
    };
  }, [setStateBar]);

  return (
    <>
      <CSSTransition
        nodeRef={overlayRef}
        in={stateBar}
        timeout={200}
        classNames={{
          // появление
          enter: "z-30 opacity-0 transition-opacity ease-linear duration-200",
          enterActive: "opacity-100",
          enterDone: "z-30",
          // исчезновение
          exit: "z-30 transition-opacity ease-linear duration-200",
          exitActive: "opacity-0",
          exitDone: "opacity-0 -z-10",
        }}
      >
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-black bg-opacity-50 opacity-0 -z-10"
          onClick={() => setStateBar(false)}
        ></div>
      </CSSTransition>
      <CSSTransition
        nodeRef={sideRef}
        in={stateBar}
        timeout={200}
        classNames={{
          // появление
          enter:
            "-translate-x-full z-40 transition ease-in-out duration-200 transform",
          enterActive: "translate-x-0",
          enterDone: "translate-x-0 z-40",
          // исчезновение
          exit: "z-40 transition ease-in-out duration-200 transform",
          exitActive: "-translate-x-full",
          exitDone: "-translate-x-full -z-10",
        }}
      >
        <aside
          ref={sideRef}
          className="w-64 max-h-screen overflow-auto bg-white fixed -translate-x-full -z-10"
        >
          <SectionWrapper className="flex items-center p-4 border-b sticky top-0 bg-white -mb-2">
            <button
              className="ml-2 mr-6 focus:outline-none"
              onClick={() => setStateBar(false)}
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
