import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import { BaseIcon } from "@src/shared/Icons";

interface InputSearchProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

export const InputSearch: FC<InputSearchProps> = ({ query, setQuery }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const classes = `w-full h-full px-3 shadow-inner rounded-bl-sm rounded-tl-sm border border-gray-300 focus:border-blue-700 focus:outline-none`;
  const isShow = Boolean(query.length > 0);

  useEffect(() => {
    if (inputRef.current && window.innerWidth <= 640) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className={classes}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {isShow && (
        <button
          onClick={() => setQuery("")}
          className="absolute right-0 top-0 h-full px-3 outline-none"
        >
          <BaseIcon icon="x" className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
