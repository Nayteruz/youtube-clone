import { FC, RefObject } from "react";

interface IBaseModalOverlayProps<T> {
  close: () => void;
  nodeRef: RefObject<T>;
}

export const BaseModalOverlay: FC<IBaseModalOverlayProps<HTMLDivElement>> = ({
  close,
  nodeRef,
}) => {
  return (
    <div
      className={`absolute inset-0 bg-black bg-opacity-80`}
      onClick={close}
      ref={nodeRef}
    />
  );
};
