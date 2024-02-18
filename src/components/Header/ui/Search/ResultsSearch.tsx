import { Dispatch, FC, SetStateAction } from "react";

interface ISearchResultsProps {
  results: string[];
  selectedId: number | null;
  setSelectedId: Dispatch<SetStateAction<number | null>>;
  selectSearchResult: () => void;
}

export const ResultsSearch: FC<ISearchResultsProps> = ({
  results,
  selectedId,
  setSelectedId,
  selectSearchResult,
}) => {
  const wrapperClasses = `absolute top-full bg-white w-full border border-t-0 border-gray-300 shadow-md pt-4 max-h-[calc(100vh_-_50px)] overflow-auto`;
  const reportLinkClasses = `inline-block w-full text-right text-xs italic text-gray-500 hover:text-black pr-2`;
  const itemClasses = (itemId: number) =>
    `text-black hover:bg-gray-100 px-3 py-1 cursor-pointer select-none truncate ${itemId === selectedId ? "bg-gray-100" : "bg-transparent"}`;

  // const onClick = (e: MouseEvent) => {
  //   e.preventDefault();
  //   selectSearchResult();
  // };

  return (
    <div className={wrapperClasses}>
      <ul className="">
        {results &&
          results.length > 0 &&
          results.map((text, index) => (
            <li
              onMouseEnter={() => setSelectedId(index)}
              onMouseLeave={() => setSelectedId(null)}
              onClick={(e) => {
                e.preventDefault();
                selectSearchResult();
              }}
              className={itemClasses(index)}
              key={text}
            >
              <span onMouseEnter={() => setSelectedId(index || 0)}>{text}</span>
            </li>
          ))}
      </ul>
      <a href="#" className={reportLinkClasses}>
        Report search predictions
      </a>
    </div>
  );
};
