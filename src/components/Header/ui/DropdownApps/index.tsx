import { List } from "./List";
import { IItem } from "./types";

export const DropdownApps = () => {
  const listTV: IItem[] = [
    {
      id: crypto.randomUUID(),
      href: "#",
      label: "YouTube TV",
    },
  ];

  const listMusic: IItem[] = [
    {
      id: crypto.randomUUID(),
      href: "#",
      label: "YouTube Music",
    },
    {
      id: crypto.randomUUID(),
      href: "#",
      label: "YouTube Kids",
    },
  ];

  const listArtists: IItem[] = [
    {
      id: crypto.randomUUID(),
      href: "#",
      label: "Creator Academy",
    },
    {
      id: crypto.randomUUID(),
      href: "#",
      label: "YouTube for Artists",
    },
  ];

  return (
    <div className="opacity-0 group-hover:opacity-100 absolute top-9 right-0 sm:left-0 bg-white w-60 border border-t-0">
      <List className="py-2 border-b" items={listTV} />
      <List className="py-2 border-b" items={listMusic} />
      <List className="py-2" items={listArtists} />
    </div>
  );
};
