import { FC, ReactNode } from "react";

interface ISidebarMobileOverlayProps {
  children: ReactNode;
}

export const SidebarMobileOverlay: FC<ISidebarMobileOverlayProps> = ({
  children,
}) => {
  return (
    <div className="hidden fixed inset-0 bg-black bg-opacity-50 z-30">
      {children}
    </div>
  );
};
