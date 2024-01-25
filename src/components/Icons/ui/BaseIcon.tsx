import { FC } from "react";
import { icons, TIcons } from "../model/icons";

interface BaseIconProps {
  icon: TIcons;
  className?: string;
}

export const BaseIcon: FC<BaseIconProps> = ({ icon, className = "" }) => {
  if (!icons[icon]) {
    return null;
  }

  return (
    <svg
      className={className ? className : "w-6 h-6"}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: icons[icon] }}
    />
  );
};
