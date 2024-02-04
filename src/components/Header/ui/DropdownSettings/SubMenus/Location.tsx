import { FC, memo } from "react";
import { SubItem } from "../SubItem";
import { SubmenuHeader } from "../SubmenuHeader";

export const Location: FC = memo(() => {
  const list = [
    {
      id: "1",
      label: "Russia",
    },
    {
      id: "2",
      label: "United States",
    },
    {
      id: "3",
      label: "Canada",
    },
  ];
  return (
    <>
      <SubmenuHeader label="Choose your location" />
      <section className="py-2">
        <ul className="max-h-96 overflow-auto">
          {list.map((subitem) => (
            <SubItem key={subitem.id} item={subitem} />
          ))}
        </ul>
      </section>
    </>
  );
});

Location.displayName = "Location";
