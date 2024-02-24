import { FC, memo, ReactNode, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CloseButton } from "./CloseButton";
import { BaseModalOverlay } from "./BaseModalOverlay";
import WithAnimation from "@src/hoc/WithAnimation";

interface IBaseModalProps {
  setOpen?: (value: boolean) => void;
  isOpen: boolean;
  children?: ReactNode;
}

export const BaseModal: FC<IBaseModalProps> = memo(
  ({ setOpen, children, isOpen }) => {
    const overlayRef = useRef(null);
    const closeModal = useCallback(() => {
      setOpen?.(false);
    }, [setOpen]);

    useEffect(() => {
      const closeOnEscape = (e: KeyboardEvent) => {
        if (e.code === "Escape") {
          closeModal();
        }
      };

      window.addEventListener("keydown", closeOnEscape);

      return () => {
        window.removeEventListener("keydown", closeOnEscape);
      };
    }, [closeModal]);

    return (
      <>
        {createPortal(
          <WithAnimation
            delay={2000}
            state={isOpen}
            nodeRef={overlayRef}
            enterClass="animate-[fadeIn_2000ms_ease-in-out]"
            exitClass="animate-[fadeOut_2000ms_ease-in-out]"
          >
            <div className="fixed inset-0 z-50 focus:outline-none flex items-start justify-center">
              <BaseModalOverlay nodeRef={overlayRef} close={closeModal} />
              {isOpen && (
                <div className="bg-white w-2/3 m-8 relative">
                  <CloseButton close={closeModal} />
                  <div className="p-6">{children}</div>
                </div>
              )}
            </div>
          </WithAnimation>,
          document.body,
        )}
      </>
    );
  },
);

BaseModal.displayName = "BaseModal";
