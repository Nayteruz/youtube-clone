import { FC, memo } from "react";
import { SubmenuHeader } from "../SubmenuHeader";

export const Restricted: FC = memo(() => {
  return (
    <>
      <SubmenuHeader label="Restricted Mode" />
      <section className="px-3 py-4 space-y-4 text-black text-sm">
        <p>
          This helps hide potentially mature videos. No filter is 100% accurate.
        </p>
        <p>This setting only applies to this browser.</p>
        <div className="text-gray-600 font-semibold flex items-center">
          <span className="uppercase mr-2">Activate restricted mode</span>
          <input type="checkbox" />
        </div>
        <div>
          <p>
            Restricted Mode lock prevents others from changing the Restricted
            Mode settings on this browser.
          </p>
          <p>Lock Restricted Mode on this browser</p>
        </div>
      </section>
    </>
  );
});

Restricted.displayName = "Restricted";
