import { CategoriesItem } from "../CategoriesItem/CategoriesItem";
import { categories } from "../../model/data";

export const Categories = () => {
  return (
    <section className="pt-14 md:pl-24 xl:pl-64 w-full fixed bg-white bg-opacity-95 z-10">
      <div className="border-t border-b px-4 max-w-screen-2xl m-auto">
        <div className="py-3 flex space-x-3 overflow-auto text-sm whitespace-nowrap">
          {categories.map((category) => (
            <CategoriesItem
              key={category}
              href="#"
              isActive={category === "All"}
            >
              {category}
            </CategoriesItem>
          ))}
        </div>
      </div>
    </section>
  );
};
