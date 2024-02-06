import { FC } from "react";

interface ISearchResultsProps {
  results: string[];
}

export const SearchResults: FC<ISearchResultsProps> = ({ results }) => {
  const wrapperClasses = `absolute top-full bg-white w-full border border-t-0 border-gray-300 shadow-md pt-4`;
  const itemClasses = `text-black hover:bg-gray-100 px-3 py-1 cursor-pointer select-none truncate`;
  const reportLinkClasses = `inline-block w-full text-right text-xs italic text-gray-500 hover:text-black pr-2`;

  return (
    <div className={wrapperClasses}>
      <ul className="">
        {results &&
          results.length > 0 &&
          results.map((result) => (
            <li className={itemClasses} key={result}>
              {result}
            </li>
          ))}
      </ul>
      <a href="#" className={reportLinkClasses}>
        Report search predictions
      </a>
    </div>
  );
};
