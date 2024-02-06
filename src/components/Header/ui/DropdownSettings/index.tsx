import { memo, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { BaseIcon } from "@src/shared/Icons";
import { useClickOutside } from "@src/hooks/useClickOutside";
import { useEscape } from "@src/hooks/useEscape";
import { BaseTooltip } from "@src/shared/ui/BaseTooltip";
import { Menu } from "./Menu";
import { useMenu } from "@src/hooks/useMenu";

export const DropdownSettings = memo(() => {
  const listRef = useRef<HTMLDivElement>(null);
  const { menuId, setMenuId } = useMenu();

  const setNullMenu = () => {
    setTimeout(async () => {
      setMenuId(null);
    }, 100);
  };

  const setNullAndClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setMenuId(null);
    }, 100);
  };

  useEffect(() => {
    if (listRef.current) {
      listRef.current.focus();
    }
  }, [menuId]);

  const { click: isOpen, setClick: setIsOpen } = useClickOutside(
    "#dropdownSettings",
    setNullMenu,
  );
  useEscape<HTMLDivElement>(listRef, isOpen, setNullAndClose);

  const classes = `z-10 absolute top-9 right-0 bg-white w-72 border border-t-0 outline-none`;
  const transition = {
    // появление
    enter: "opacity-0 scale-95",
    enterActive:
      "opacity-100 scale-100 transition-opacity ease-out duration-100",
    // исчезновение
    exit: "transition-opacity ease-in duration-75",
    exitActive: "opacity-0 scale-95",
  };

  return (
    <div className="relative" id="dropdownSettings">
      <BaseTooltip textLabel="Settings">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-2 focus:outline-none"
        >
          <BaseIcon icon="dotsVertical" className="w-5 h-5" />
        </button>
      </BaseTooltip>
      <CSSTransition
        nodeRef={listRef}
        in={isOpen}
        timeout={100}
        unmountOnExit
        onEntered={() => listRef?.current?.focus()}
        classNames={transition}
      >
        <div ref={listRef} tabIndex={-1} className={classes}>
          <Menu />
        </div>
      </CSSTransition>
    </div>
  );
});

DropdownSettings.displayName = "DropdownSettings";
