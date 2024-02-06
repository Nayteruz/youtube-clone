import { FC, memo } from "react";
import { SubItem } from "../SubItem";
import { SubmenuHeader } from "../SubmenuHeader";

export const Appearance: FC = memo(() => {
  const list = [
    {
      id: "1",
      label: "Device theme",
    },
    {
      id: "2",
      label: "Dark theme",
    },
    {
      id: "3",
      label: "Light theme",
    },
  ];

  return (
    <>
      <SubmenuHeader label="Appearance" />
      <section className="py-2">
        <div className="text-gray-500 text-xs p-3">
          Setting applies to this browser only
        </div>
        <ul className="max-h-96 overflow-auto">
          {list.map((subitem) => (
            <SubItem key={subitem.id} item={subitem} />
          ))}
        </ul>
      </section>
    </>
  );
});

Appearance.displayName = "Appearance";
