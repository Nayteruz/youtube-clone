import { memo, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { BaseIcon } from "@src/shared/Icons";
import { List } from "./List";
import { listArtists, listMusic, listTV } from "../../model/apps";
import { useClickOutside } from "@src/hooks/useClickOutside";

export const DropdownApps = memo(() => {
  const { click: isOpen, setClick: setIsOpen } =
    useClickOutside("#dropdownApps");
  const listRef = useRef(null);

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
          className="absolute top-9 right-0 bg-white w-60 border border-t-0"
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
