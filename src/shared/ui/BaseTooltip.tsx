import { FC, ReactNode, useState } from "react";

interface IBaseTooltipProps {
  children: ReactNode;
  textLabel: string;
}

export const BaseTooltip: FC<IBaseTooltipProps> = ({ children, textLabel }) => {
  const classes = `bg-gray-600 bg-opacity-80 rounded-sm text-white text-xs whitespace-nowrap p-2 absolute top-14 left-1/2 transform -translate-x-1/2`;

  const [isShown, setIsShown] = useState(false);

  const shown = () => setIsShown((prev) => !prev);

  return (
    <div className="relative">
      <div onMouseEnter={shown} onMouseLeave={shown} className="h-full">
        {children}
      </div>
      {isShown && <div className={classes}>{textLabel}</div>}
    </div>
  );
};
