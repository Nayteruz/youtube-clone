import { CategoriesItem } from "@src/components/Categories/ui/CategoriesItem/CategoriesItem";

export const Categories = () => {
  const categories: string[] = [
    "All",
    "Trucks",
    "Tools",
    "Machines",
    "Engines",
    "Snow",
    "Ships",
    "Roads",
    "Tanks",
    "Building",
    "Mars",
    "Woodworking",
    "Tractors",
    "Songs",
    "TV Shows",
    "Football",
    "Planes",
    "Live",
    "Streets",
    "Programming",
  ];

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
