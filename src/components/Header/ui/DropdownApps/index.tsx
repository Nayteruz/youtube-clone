import { memo, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { BaseIcon } from "@src/shared/Icons";
import { List } from "./List";
import { listArtists, listMusic, listTV } from "../../model/apps";
import { useClickOutside } from "@src/hooks/useClickOutside";
import { useEscape } from "@src/hooks/useEscape";

export const DropdownApps = memo(() => {
  const listRef = useRef<HTMLDivElement>(null);
  const { click: isOpen, setClick: setIsOpen } =
    useClickOutside("#dropdownApps");
  useEscape<HTMLDivElement>(listRef, isOpen, () => setIsOpen(false));

  return (
    <div className="relative" id="dropdownApps">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="p-2 focus:outline-none"
      >
        <BaseIcon icon="viewGrid" className="w-5 h-5" />
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
          className="absolute top-9 right-0 bg-white w-60 border border-t-0 outline-none"
        >
          <List className="py-2 border-b" items={listTV} />
          <List className="py-2 border-b" items={listMusic} />
          <List className="py-2" items={listArtists} />
        </div>
      </CSSTransition>
    </div>
  );
});

DropdownApps.displayName = "DropdownApps";
