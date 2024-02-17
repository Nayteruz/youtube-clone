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
  const [results, setResults] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [isSearchResultsShown, setIsSearchResultsShown] = useState(false);
  const [activeSearchResultId, setActiveSearchResultId] = useState<
    number | null
  >(null);

  const trimmedQuery = useMemo(
    () => (newQuery: string) => {
      return newQuery.replace(/\s+/g, " ").trim();
    },
    [],
  );

  const toggleSearchResults = useMemo(
    () => (isSearchInputActive: boolean) => {
      setIsSearchResultsShown(isSearchInputActive && results.length > 0);
    },
    [results.length],
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

  const updateSearchResults = (newQuery: string) => {
    setActiveSearchResultId(null);
    setActiveQuery(newQuery);

    if (newQuery === "") {
      setResults([]);
    } else {
      const newResult = keywords.filter((result) => {
        return result.includes(trimmedQuery(newQuery));
      });
      setResults(newResult);
    }
  };

  const selectSearchResult = () => {
    const newQuery = activeSearchResultId
      ? results[activeSearchResultId]
      : query;
    setQuery(newQuery);
    toggleSearchResults(false);
    updateSearchResults(newQuery);
  };

  const handlePreviousSearchResult = () => {
    if (isSearchResultsShown) {
      makePreviousSearchResultActive();
      updateQueryWithSearchResult();
    } else {
      toggleSearchResults(true);
    }
  };

  const handleNextSearchResult = () => {
    if (isSearchResultsShown) {
      makeNextSearchResultActive();
      updateQueryWithSearchResult();
    } else {
      toggleSearchResults(true);
    }
  };

  const makePreviousSearchResultActive = () => {
    setActiveSearchResultId((prev) => {
      if (prev === null) {
        return results.length - 1;
      } else if (prev === 0) {
        return null;
      } else {
        return prev - 1;
      }
    });
  };

  const makeNextSearchResultActive = () => {
    setActiveSearchResultId((prev) => {
      if (prev === null) {
        return 0;
      } else if (prev + 1 === results.length) {
        return null;
      } else {
        return prev + 1;
      }
    });
  };

  const updateQueryWithSearchResult = () => {
    const newQuery =
      activeSearchResultId !== null
        ? results[activeSearchResultId]
        : activeQuery;
    setQuery(newQuery);
  };

  const setActiveResultId = (id: number | null) => {
    setActiveSearchResultId(id);
  };

  return (
    <div className="flex w-full mr-2">
      <div className="w-full relative flex">
        <InputSearch
          query={query}
          setQuery={setQuery}
          updateSearchResults={updateSearchResults}
          hasResults={results.length > 0}
          handlePreviousSearchResult={handlePreviousSearchResult}
          handleNextSearchResult={handleNextSearchResult}
          selectSearchResult={selectSearchResult}
          toggleSearchResults={toggleSearchResults}
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
