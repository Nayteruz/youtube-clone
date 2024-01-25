import { List } from "./List";
import { listSettings, smallList } from "./data";

export const DropdownSettings = () => {
  return (
    <div className="opacity-0 group-hover:opacity-100 absolute top-9 -right-full sm:right-0 bg-white w-72 border border-t-0">
      <section className="py-2 border-b">
        <List items={listSettings} />
      </section>
      <section className="py-2">
        <List items={smallList} />
      </section>
    </div>
  );
};
