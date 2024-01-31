import { BaseIcon, TIcons } from "@src/shared/Icons";
import { FC, useState } from "react";

interface IButtonProps {
  label: string;
  iconName: TIcons;
  className?: string;
}

export const Button: FC<IButtonProps> = ({ label, iconName, className }) => {
  const [isBadgeShow, setIsBadgeShow] = useState(false);

  const normalClasses = `opacity-0 group-hover:opacity-100 bg-opacity-60 absolute right-0 bg-black text-white m-1 p-1 will-change-transform ${isBadgeShow ? "rounded-r-sm" : "rounded-sm"}`;
  const badgeClasses = `absolute max-w-[max-content] transition-width bg-black bg-opacity-60 whitespace-nowrap top-0 right-full overflow-hidden uppercase duration-100 text-xs delay-100 font-semibold rounded-l-sm ${isBadgeShow ? "w-[1000%]" : "w-0"}`;

  const badgeShow = () => {
    setIsBadgeShow((prev) => !prev);
  };

  return (
    <span
      className={`${normalClasses} ${className}`}
      onMouseEnter={badgeShow}
      onMouseLeave={badgeShow}
      style={{ willChange: "transform" }}
    >
      <BaseIcon icon={iconName} className="w-5 h-5" />
      <span className={badgeClasses}>
        <span className="inline-block my-1.5 mx-3">{label}</span>
      </span>
    </span>
  );
};
