import { FC, memo, useEffect, useMemo, useState } from "react";
import { InputSearch } from "./InputSearch";
import { ButtonSearch } from "./ButtonSearch";
import { ResultsSearch } from "./ResultsSearch";

const keywords = [
  "new york giants",
  "new york alicia keys",
  "new york giants vs washington football",
  "new york",
  "new york song",
  "new york new york frank sinatra",
  "new york jets",
  "new york city",
  "new york giants live",
  "new york state of mind",
  "new york giants vs washington football live",
  "new york giants injury",
  "new york giants live stream",
  "new york accent",
];

export const Search: FC = memo(() => {
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [isSearchResultsShown, setIsSearchResultsShown] = useState(false);
  const [activeSearchResultId, setActiveSearchResultId] = useState<
    number | null
  >(null);
  const isResultsShown = results.length > 0 && isSearchInputFocused;

  const trimmedQuery = useMemo(() => {
    return query.replace(/\s+/g, "").trim();
  }, [query]);

  const toggleSearchResults = useMemo(
    () => (isSearchInputActive: boolean) => {
      setIsSearchResultsShown(isSearchInputActive && results.length > 0);
    },
    [results],
  );

  useEffect(() => {
    const onClickAndResize = () => toggleSearchResults(false);

    window.addEventListener("click", onClickAndResize);
    window.addEventListener("resize", onClickAndResize);

    return () => {
      window.removeEventListener("click", onClickAndResize);
      window.removeEventListener("resize", onClickAndResize);
    };
  }, [toggleSearchResults]);

  const selectSearchResult = () => {
    const newQuery = activeSearchResultId
      ? results[activeSearchResultId]
      : query;
    setQuery(newQuery);
    toggleSearchResults(false);
    updateSearchResults();
  };

  const updateSearchResults = () => {
    setActiveSearchResultId(null);
    setActiveQuery(query);

    if (query === "") {
      setResults([]);
    } else {
      const newResult = keywords.filter((result) => {
        return result.includes(trimmedQuery);
      });
      setResults(newResult);
    }
  };

  const updateQueryWithSearchResult = () => {
    const hasActiveSearchResult = activeSearchResultId !== null;

    const newQuery = hasActiveSearchResult
      ? results[activeSearchResultId]
      : activeQuery;
    setQuery(newQuery);
  };

  const setActiveResultId = (id: number | null) => {
    setActiveSearchResultId(id);
  };

  // input

  ///

  return (
    <div className="flex w-full mr-2">
      <div className="w-full relative flex">
        <InputSearch
          query={query}
          setQuery={setQuery}
          isSearchInputFocused={isSearchInputFocused}
          setIsSearchInputFocused={setIsSearchInputFocused}
          isResultsShown={isResultsShown}
          activeResultId={activeSearchResultId}
          setActiveResultId={setActiveSearchResultId}
          results={results}
          activeQuery={activeQuery}
          setActiveQuery={setActiveQuery}
        />
        {isSearchResultsShown && (
          <ResultsSearch
            results={results}
            activeResultId={activeSearchResultId}
            setActiveResultId={setActiveResultId}
            selectSearchResult={selectSearchResult}
          />
        )}
      </div>
      <ButtonSearch selectSearchResult={selectSearchResult} />
    </div>
  );
});

Search.displayName = "Search";
