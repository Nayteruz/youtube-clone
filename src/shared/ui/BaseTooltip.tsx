import { FC, ReactNode, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

interface IBaseTooltipProps {
  children: ReactNode;
  textLabel: string;
  top?: boolean;
  right?: boolean;
  left?: boolean;
}

export const BaseTooltip: FC<IBaseTooltipProps> = ({
  children,
  textLabel,
  top = false,
  right = false,
  left = false,
}) => {
  const labelRef = useRef<HTMLDivElement>(null);
  const [isShown, setIsShown] = useState(false);

  const getPositionClasses = () => {
    const topClass = top ? "bottom-10" : "top-14";

    if (right) {
      return `${topClass} right-0`;
    }

    if (left) {
      return `${topClass} left-0`;
    }

    return `${topClass} left-1/2 -translate-x-1/2`;
  };
  const classes = `bg-gray-600 bg-opacity-80 rounded-sm text-white text-xs whitespace-nowrap p-2 absolute transform ${getPositionClasses()}`;

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        onClick={() => setIsShown(false)}
        className="h-full flex items-center"
      >
        {children}
      </div>
      <CSSTransition
        nodeRef={labelRef}
        in={isShown}
        timeout={200}
        unmountOnExit
        classNames={{
          // появление
          enter: "opacity-0",
          enterActive: "opacity-100 transition-opacity duration-200",
          // исчезновение
          exit: "transition-opacity ease-in duration-200",
          exitActive: "opacity-0",
        }}
      >
        <div ref={labelRef} className={classes}>
          {textLabel}
        </div>
      </CSSTransition>
    </div>
  );
};
