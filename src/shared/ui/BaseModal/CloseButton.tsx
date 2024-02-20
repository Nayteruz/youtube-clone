import { BaseIcon } from "@src/shared/Icons";
import { FC } from "react";

interface ICloseButtonProps {
  close: () => void;
}

export const CloseButton: FC<ICloseButtonProps> = ({ close }) => {
  return (
    <div className="p-2 text-right">
      <button onClick={close} className="p-2 focus:outline-none">
        <BaseIcon icon="x" />
      </button>
    </div>
  );
};
