import { FC, memo } from "react";
import { SubItem } from "../SubItem";
import { SubmenuHeader } from "../SubmenuHeader";

export const Language: FC = memo(() => {
  const list = [
    {
      id: "1",
      label: "Russian",
    },
    {
      id: "2",
      label: "English",
    },
    {
      id: "3",
      label: "African",
    },
  ];

  return (
    <>
      <SubmenuHeader label="Choose your language" />
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

Language.displayName = "Language";
