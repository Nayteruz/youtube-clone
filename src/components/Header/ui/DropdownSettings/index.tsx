import { memo, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { BaseIcon } from "@src/shared/Icons";
import { useClickOutside } from "@src/hooks/useClickOutside";
import { List } from "./List";
import { listSettings, smallList } from "../../model/settings";
import { useEscape } from "@src/hooks/useEscape";

export const DropdownSettings = memo(() => {
  const listRef = useRef<HTMLDivElement>(null);
  const { click: isOpen, setClick: setIsOpen } =
    useClickOutside("#dropdownSettings");
  useEscape<HTMLDivElement>(listRef, isOpen, () => setIsOpen(false));

  return (
    <div className="relative" id="dropdownSettings">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 focus:outline-none"
      >
        <BaseIcon icon="dotsVertical" className="w-5 h-5" />
      </button>
      <CSSTransition
        nodeRef={listRef}
        in={isOpen}
        timeout={100}
        unmountOnExit
        onEntered={() => listRef?.current?.focus()}
        classNames={{
          // появление
          enter: "opacity-0 scale-95",
          enterActive:
            "opacity-100 scale-100 transition-opacity ease-out duration-100",
          // исчезновение
          exit: "transition-opacity ease-in duration-75",
          exitActive: "opacity-0 scale-95",
        }}
      >
        <div
          ref={listRef}
          tabIndex={-1}
          className="absolute top-9 right-0 bg-white w-72 border border-t-0 outline-none"
        >
          <section className="py-2 border-b">
            <List items={listSettings} />
          </section>
          <section className="py-2">
            <List items={smallList} />
          </section>
        </div>
      </CSSTransition>
    </div>
  );
});

DropdownSettings.displayName = "DropdownSettings";
