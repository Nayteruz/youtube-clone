import {
  Dispatch,
  FC,
  KeyboardEvent as TypeKeyboardEvent,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BaseIcon } from "@src/shared/Icons";

interface InputSearchProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  hasResults: boolean;
  handlePreviousSearchResult: () => void;
  handleNextSearchResult: () => void;
  selectSearchResult: () => void;
  toggleSearchResults: (value: boolean) => void;
}

export const InputSearch: FC<InputSearchProps> = ({
  query,
  setQuery,
  hasResults,
  handlePreviousSearchResult,
  handleNextSearchResult,
  selectSearchResult,
  toggleSearchResults,
}) => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const classes = `w-full h-full px-3 shadow-inner rounded-bl-sm rounded-tl-sm border border-gray-300 focus:border-blue-700 focus:outline-none`;

  const clearInputText = () => {
    inputRef.current?.focus();
    // setQuery("");
    updateQuery("");
  };

  const removeSelection = () => {
    const end = inputRef.current?.value.length || 0;

    inputRef.current?.setSelectionRange(end, end);
  };

  const handleEnter = () => {
    setState(false);

    inputRef.current?.blur();

    selectSearchResult();
  };

  const handleEsc = () => {
    removeSelection();

    if (isActive && hasResults) {
      setState(false);
    } else {
      inputRef.current?.blur();
    }
  };

  const setState = (isActive: boolean) => {
    setIsActive(isActive);
    toggleSearchResults(isActive);
  };

  const updateQuery = (query: string) => {
    setQuery(query);
    setState(isActive);
  };

  const onSlash = useRef((e: KeyboardEvent) => {
    const isInputFocused = inputRef.current === document.activeElement;

    if (e.code === "Slash" && !isInputFocused) {
      e.preventDefault();

      inputRef.current?.focus();
    }
  });

  useEffect(() => {
    if (window.innerWidth <= 640) {
      inputRef.current?.focus();
    }

    const onSlashAction = onSlash.current;

    document.addEventListener("keydown", onSlashAction);

    return () => {
      document.removeEventListener("keydown", onSlashAction);
    };
  }, []);

  const onKeyDown = (e: TypeKeyboardEvent) => {
    if (e.code === "ArrowUp" || e.code === "ArrowDown") {
      e.preventDefault();
    }

    if (e.code === "Enter") {
      handleEnter();
    }
  };

  const onKeyUp = (e: TypeKeyboardEvent) => {
    // e.preventDefault();

    if (e.code === "ArrowUp") {
      handlePreviousSearchResult();
    }

    if (e.code === "ArrowDown") {
      handleNextSearchResult();
    }

    if (e.code === "Escape") {
      handleEsc();
    }
  };

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className={classes}
        value={query}
        onChange={(e) => updateQuery(e.target.value)}
        onFocus={() => setState(true)}
        // onBlur={() => setIsSearchInputFocused(false)}
        onClick={(e) => {
          e.preventDefault();
          setState(true);
        }}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
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
