import { FC, memo, ReactNode, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CloseButton } from "./CloseButton";
import { BaseModalOverlay } from "./BaseModalOverlay";

interface IBaseModalProps {
  setOpen?: (value: boolean) => void;
  children?: ReactNode;
}

export const BaseModal: FC<IBaseModalProps> = memo(({ setOpen, children }) => {
  const [isAnimate, setIsAnimate] = useState(false);
  const close = useCallback(() => {
    setIsAnimate(true);
    setTimeout(() => {
      setOpen?.(false);
      setIsAnimate(false);
    }, 200);
  }, [setOpen]);

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [close]);

  return (
    <>
      {createPortal(
        <div className="fixed inset-0 z-50 focus:outline-none flex items-start justify-center">
          <BaseModalOverlay close={close} isAnimate={isAnimate} />
          {!isAnimate && (
            <div className="bg-white w-2/3 m-8 relative">
              <CloseButton close={close} />
              <div className="p-6">{children}</div>
            </div>
          )}
        </div>,
        document.body,
      )}
    </>
  );
});

BaseModal.displayName = "BaseModal";
