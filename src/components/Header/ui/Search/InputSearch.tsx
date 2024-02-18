import React, { FC, RefObject, useEffect, useRef } from "react";
import { BaseIcon } from "@src/shared/Icons";

interface InputSearchProps {
  query: string;
  activeQuery: string;
  changeQuery: (value: string) => void;
  closeResults: (input: RefObject<HTMLInputElement>) => void;
  showResults: () => void;
  selectedId: number | null;
  changeSelectedId: (action: "up" | "down") => void;
  selectSearchResult: () => void;
}

export const InputSearch: FC<InputSearchProps> = ({
  query,
  activeQuery,
  changeQuery,
  closeResults,
  showResults,
  selectedId,
  changeSelectedId,
  selectSearchResult,
}) => {
  const inputValue = selectedId !== null ? activeQuery : query;
  const inputRef = useRef<HTMLInputElement>(null);
  const classes = `w-full h-full px-3 shadow-inner rounded-bl-sm rounded-tl-sm border border-gray-300 focus:border-blue-700 focus:outline-none`;

  const clearInputText = () => {
    inputRef.current?.focus();
    changeQuery("");
  };

  useEffect(() => {
    if (window.innerWidth <= 640) {
      inputRef.current?.focus();
    }

    const onSlash = (e: KeyboardEvent) => {
      const isInputFocused = inputRef.current === document.activeElement;

      if (e.code === "Slash" && !isInputFocused) {
        e.preventDefault();

        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onSlash);

    return () => {
      document.removeEventListener("keydown", onSlash);
    };
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === "Escape") {
      e.preventDefault();
      closeResults(inputRef);
    }

    if (e.code === "ArrowUp") {
      e.preventDefault();
      changeSelectedId("up");
    }

    if (e.code === "ArrowDown") {
      e.preventDefault();
      changeSelectedId("down");
    }

    if (e.code === "Enter") {
      e.preventDefault();
      selectSearchResult();
    }
  };

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className={classes}
        value={inputValue}
        onChange={(e) => changeQuery(e.target.value)}
        // onFocus={() => setState(true)}
        onClick={showResults}
        onKeyDown={onKeyDown}
        // onKeyUp={onKeyUp}
      />
      {query.length > 0 && (
        <button
          onClick={clearInputText}
          className="absolute right-0 top-0 h-full px-3 outline-none"
        >
          <BaseIcon icon="x" className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
