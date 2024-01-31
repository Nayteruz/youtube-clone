import { MouseEvent, RefObject, useCallback, useEffect, useState } from "react";

interface IDropdownProps<T, B> {
  dropdown: RefObject<T>;
  button: RefObject<B>;
  clickInfo: MouseEvent;
  isOpen: boolean;
}

export const useDropdownClass = <T, B>({
  dropdown,
  button,
  clickInfo,
  isOpen,
}: IDropdownProps<T, B>) => {
  const [position, setPosition] = useState<string>("");

  const getTopClass = useCallback(() => {
    const coordY = clickInfo?.clientY || 0;
    const buttonHeight = (button as any)?.current?.clientHeight || 0;
    const dropdownHeight = (dropdown as any)?.current?.clientHeight || 0;

    if (window.innerHeight - coordY < dropdownHeight) {
      return "top-auto";
    }

    if (window.innerHeight - coordY < dropdownHeight + buttonHeight) {
      return "top-0";
    }

    return "top-8";
  }, [button, clickInfo?.clientY, dropdown]);

  const getRightClass = useCallback(() => {
    const coordX = clickInfo?.clientX || 0;
    const coordY = clickInfo?.clientY || 0;
    const buttonHeight = (button as any).current?.clientHeight || 0;
    const dropdownWidth = (dropdown as any).current?.clientWidth || 0;
    const dropdownHeight = (dropdown as any).current?.clientHeight || 0;

    if (window.innerWidth - coordX > dropdownWidth) {
      return "right-auto";
    }

    if (window.innerHeight - coordY > dropdownHeight + buttonHeight) {
      return "right-0";
    }

    if (window.innerHeight - coordY > dropdownHeight) {
      return "right-10";
    }

    return "right-0";
  }, [button, clickInfo?.clientX, clickInfo?.clientY, dropdown]);

  const getLeftClass = useCallback(() => {
    const coordX = clickInfo?.clientX || 0;
    const coordY = clickInfo?.clientY || 0;
    const buttonHeight = (button as any).current?.clientHeight || 0;
    const dropdownWidth = (dropdown as any).current?.clientWidth || 0;
    const dropdownHeight = (dropdown as any).current?.clientHeight || 0;

    if (window.innerWidth - coordX < dropdownWidth) {
      return "left-auto";
    }

    if (window.innerHeight - coordY < dropdownHeight) {
      return "left-auto";
    }

    if (window.innerHeight - coordY > dropdownHeight + buttonHeight) {
      return "left-auto";
    }

    return "left-10";
  }, [button, clickInfo?.clientX, clickInfo?.clientY, dropdown]);

  const getBottomClass = useCallback(() => {
    const coordY = clickInfo?.clientY || 0;
    const dropdownHeight = (dropdown as any).current?.clientHeight || 0;

    if (window.innerHeight - coordY < dropdownHeight) {
      return "bottom-9";
    }

    return "bottom-auto";
  }, [clickInfo?.clientY, dropdown]);

  const getPositionClasses = useCallback(() => {
    const classes = [];
    const top = getTopClass();
    const right = getRightClass();
    const left = getLeftClass();
    const bottom = getBottomClass();

    if (top) {
      classes.push(top);
    }

    if (left) {
      classes.push(left);
    }

    if (right) {
      classes.push(right);
    }

    if (bottom) {
      classes.push(bottom);
    }

    setTimeout(() => {
      (dropdown as any).current?.focus();
    }, 1);

    return classes.join(" ");
  }, [dropdown, getBottomClass, getLeftClass, getRightClass, getTopClass]);

  useEffect(() => {
    if (isOpen) {
      setPosition(getPositionClasses());
    } else {
      setPosition("");
    }
  }, [getPositionClasses, isOpen]);

  return position;
};
