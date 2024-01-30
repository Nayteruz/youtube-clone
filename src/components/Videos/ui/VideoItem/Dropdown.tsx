import { BaseIcon } from "@src/shared/Icons";
import { DropdownItem } from "./DropdownItem";
import { MouseEvent, useRef } from "react";
import { useClickOutside } from "@src/hooks/useClickOutside";
import { useEscape } from "@src/hooks/useEscape";
import { CSSTransition } from "react-transition-group";

export const Dropdown = ({ index }: { index: number }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { click: isOpen, setClick: setIsOpen } = useClickOutside(
    `#dropdownInfo${index}`,
  );
  useEscape<HTMLDivElement>(dropdownRef, isOpen, () => setIsOpen(false));

  const toggleOpen = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative ml-auto" id={`dropdownInfo${index}`}>
      <button
        onClick={toggleOpen}
        className="-mt-1 ml-auto p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <BaseIcon icon="dotsVertical" className="w-6 h-6" />
      </button>
      <CSSTransition
        nodeRef={dropdownRef}
        in={isOpen}
        timeout={100}
        unmountOnExit
        onEntered={() => dropdownRef?.current?.focus()}
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
          ref={dropdownRef}
          tabIndex={-1}
          className="absolute top-9 right-0 bg-white w-60 rounded shadow outline-none"
        >
          <section className="py-2">
            <ul>
              <DropdownItem
                item={{
                  label: "Добавить в список",
                  iconName: "lines",
                  link: "#",
                }}
              />
            </ul>
          </section>
        </div>
      </CSSTransition>
    </div>
  );
};
