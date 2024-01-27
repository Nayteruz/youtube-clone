import { FC } from "react";
import { BaseIcon } from "@src/components/shared/Icons";

interface IButtonLoginProps {
  className?: string;
}

export const ButtonLogin: FC<IButtonLoginProps> = ({ className }) => {
  const cls =
    "focus:outline-none flex items-center px-2 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm";

  return (
    <button className={`${cls} ${className}`}>
      <BaseIcon icon="user" className="w-7 h-7 mr-2" />
      Sign In
    </button>
  );
};
