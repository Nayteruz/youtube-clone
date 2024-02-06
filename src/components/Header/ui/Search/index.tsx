import { FC, useEffect, useState } from "react";
import { InputSearch } from "./InputSearch";
import { ButtonSearch } from "./ButtonSearch";
import { SearchResults } from "./SearchResults";

export const Search: FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);
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

  useEffect(() => {
    const res = keywords.filter((value) => value.includes(query));
    setResults(res);
  }, [keywords, query]);

  return (
    <div className="flex w-full mr-2">
      <div className="w-full relative flex">
        <InputSearch query={query} setQuery={setQuery} />
        {query.length > 0 && <SearchResults results={results} />}
      </div>
      <ButtonSearch />
    </div>
  );
};
