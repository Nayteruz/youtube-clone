import { FC, MouseEvent } from "react";

interface ISearchResultsProps {
  results: string[];
  activeResultId: number | null;
  setActiveResultId: (id: number | null) => void;
  selectSearchResult: () => void;
}

export const ResultsSearch: FC<ISearchResultsProps> = ({
  results,
  activeResultId,
  setActiveResultId,
  selectSearchResult,
}) => {
  const wrapperClasses = `absolute top-full bg-white w-full border border-t-0 border-gray-300 shadow-md pt-4`;
  const reportLinkClasses = `inline-block w-full text-right text-xs italic text-gray-500 hover:text-black pr-2`;
  const itemClasses = (itemId: number) =>
    `text-black hover:bg-gray-100 px-3 py-1 cursor-pointer select-none truncate ${itemId === activeResultId ? "bg-gray-100" : "bg-transparent"}`;

  const onClick = (e: MouseEvent) => {
    e.preventDefault();
    selectSearchResult();
  };

  return (
    <div className={wrapperClasses}>
      <ul className="">
        {results &&
          results.length > 0 &&
          results.map((text, index) => (
            <li
              onMouseEnter={() => setActiveResultId(index)}
              onMouseLeave={() => setActiveResultId(null)}
              onClick={onClick}
              className={itemClasses(index)}
              key={text}
            >
              <span onMouseEnter={() => setActiveResultId(index)}>{text}</span>
            </li>
          ))}
      </ul>
      <a href="#" className={reportLinkClasses}>
        Report search predictions
      </a>
    </div>
  );
};
