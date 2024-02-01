import { FC, ReactNode, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

interface IBaseTooltipProps {
  children: ReactNode;
  textLabel: string;
  top?: boolean;
}

export const BaseTooltip: FC<IBaseTooltipProps> = ({
  children,
  textLabel,
  top = false,
}) => {
  const labelRef = useRef<HTMLDivElement>(null);
  const classes = `bg-gray-600 bg-opacity-80 rounded-sm text-white text-xs whitespace-nowrap p-2 absolute left-1/2 transform -translate-x-1/2 ${top ? "bottom-10" : "top-14"}`;

  const [isShown, setIsShown] = useState(false);

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
