import { BaseIcon } from "@src/shared/Icons";
import { DropdownItem } from "./DropdownItem";
import { MouseEvent, useRef, useState } from "react";
import { useClickOutside } from "@src/hooks/useClickOutside";
import { useEscape } from "@src/hooks/useEscape";
import { CSSTransition } from "react-transition-group";
import { useDropdownClass } from "@src/hooks/useDropdownClass";

export const Dropdown = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { click: isOpen, setClick: setIsOpen } =
    useClickOutside(`.dropdownInfo`);
  const [isAnimatedOpen, setIsAnimatedOpen] = useState(false);
  const [clickInfo, setClickInfo] = useState<MouseEvent>({} as MouseEvent);
  useEscape<HTMLDivElement>(dropdownRef, isAnimatedOpen, () =>
    setIsOpen(false),
  );

  const positionClasses = useDropdownClass<HTMLDivElement, HTMLButtonElement>({
    dropdown: dropdownRef,
    button: buttonRef,
    clickInfo,
    isOpen: isAnimatedOpen,
  });

  const buttonClasses = `p-1 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none target-button ${isAnimatedOpen ? "opacity-100" : "opacity-0"}`;
  const dropdownBlock = `absolute bg-white w-60 rounded shadow outline-none z-30 ${positionClasses}`;

  const toggleOpen = (e: MouseEvent) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
    setClickInfo(e);
  };

  return (
    <div className="relative -mt-1 ml-auto dropdownInfo">
      <button ref={buttonRef} onClick={toggleOpen} className={buttonClasses}>
        <BaseIcon icon="dotsVertical" className="w-6 h-6" />
      </button>
      <CSSTransition
        nodeRef={dropdownRef}
        in={isOpen}
        timeout={100}
        unmountOnExit
        onEnter={() => setIsAnimatedOpen(true)}
        onExited={() => setIsAnimatedOpen(false)}
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
        <div ref={dropdownRef} tabIndex={-1} className={dropdownBlock}>
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
