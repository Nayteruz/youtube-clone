import { FC, memo, RefObject, useEffect, useState } from "react";
import { InputSearch } from "./InputSearch";
import { ButtonSearch } from "./ButtonSearch";
import { ResultsSearch } from "./ResultsSearch";
import { changeSelected, keywords } from "./utils";

export const Search: FC = memo(() => {
  const [results, setResults] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [isSearchResultsShown, setIsSearchResultsShown] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isSelectResult, setIsSelectResult] = useState(false);

  const changeQuery = (value: string) => {
    setSelectedId(null);
    setActiveQuery(value);
    setQuery(value);
  };

  useEffect(() => {
    if (selectedId !== null) {
      setActiveQuery(results[selectedId]);
    } else {
      setActiveQuery("");
    }
  }, [results, selectedId]);

  const changeSelectedId = (action: "up" | "down") => {
    if (!isSearchResultsShown && action === "down") {
      showResults();
    }
    setSelectedId((prev) => changeSelected(action, prev, results));
  };

  const closeResults = (input: RefObject<HTMLInputElement>) => {
    if (isSearchResultsShown) {
      setIsSearchResultsShown(false);
    } else if (input) {
      input.current?.blur();
    }
    setSelectedId(null);
  };

  const showResults = () => {
    if (query.length > 0 && results.length > 0) {
      setIsSearchResultsShown(true);
    }
  };

  useEffect(() => {
    const trimmedQuery = query.replace(/\s+/g, " ").trim();
    const filterQuery = keywords.filter((s) => s.includes(trimmedQuery));
    setResults(filterQuery);
    setIsSearchResultsShown(
      query.length > 0 && results.length > 0 && !isSelectResult,
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, results.length]);

  useEffect(() => {
    const closeOutsideClick = ({ target }: MouseEvent) => {
      const el = target as HTMLElement;

      if (!el.closest("#searchBlock")) {
        setIsSearchResultsShown(false);
      }
    };

    window.addEventListener("click", closeOutsideClick);

    return () => {
      window.removeEventListener("click", closeOutsideClick);
    };
  }, []);

  const selectSearchResult = () => {
    setIsSelectResult(true);
    if (activeQuery) {
      changeQuery(activeQuery);
    }

    setIsSearchResultsShown(false);
    setTimeout(() => {
      setIsSelectResult(false);
    }, 1);
  };

  return (
    <div className="flex w-full mr-2" id="searchBlock">
      <div className="w-full relative flex">
        <InputSearch
          query={query}
          activeQuery={activeQuery}
          changeQuery={changeQuery}
          closeResults={closeResults}
          showResults={showResults}
          selectedId={selectedId}
          changeSelectedId={changeSelectedId}
          selectSearchResult={selectSearchResult}
        />
        {isSearchResultsShown && (
          <ResultsSearch
            results={results}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            selectSearchResult={selectSearchResult}
          />
        )}
      </div>
      <ButtonSearch selectSearchResult={selectSearchResult} />
    </div>
  );
});

Search.displayName = "Search";
