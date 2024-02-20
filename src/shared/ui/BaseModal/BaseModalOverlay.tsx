import { FC } from "react";

interface IBaseModalOverlayProps {
  close: () => void;
  isAnimate: boolean;
}

export const BaseModalOverlay: FC<IBaseModalOverlayProps> = ({
  close,
  isAnimate,
}) => {
  const animation = isAnimate
    ? "animate-[fadeOut_300ms_ease-in-out]"
    : "animate-[fadeIn_200ms_ease-in-out]";

  return (
    <div
      className={`absolute inset-0 bg-black bg-opacity-80 ${animation}`}
      onClick={close}
    ></div>
  );
};
