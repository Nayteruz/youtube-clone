import {
  ChangeEvent,
  Dispatch,
  FC,
  KeyboardEvent as TypeKeyboardEvent,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { BaseIcon } from "@src/shared/Icons";

interface InputSearchProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  isSearchInputFocused: boolean;
  setIsSearchInputFocused: Dispatch<SetStateAction<boolean>>;
  isResultsShown: boolean;
  activeResultId: number | null;
  setActiveResultId: Dispatch<SetStateAction<number | null>>;
  results: string[];
  activeQuery: string;
  setActiveQuery: Dispatch<SetStateAction<string>>;
}

export const InputSearch: FC<InputSearchProps> = ({
  query,
  setQuery,
  isSearchInputFocused,
  setIsSearchInputFocused,
  isResultsShown,
  activeResultId,
  setActiveResultId,
  results,
  activeQuery,
  setActiveQuery,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const classes = `w-full h-full px-3 shadow-inner rounded-bl-sm rounded-tl-sm border border-gray-300 focus:border-blue-700 focus:outline-none`;

  const clearInputText = () => {
    setQuery("");
    inputRef.current?.focus();
  };

  const onKeyInputDown = (e: TypeKeyboardEvent) => {
    if (e.code === "Escape") {
      e.preventDefault();
      const length = inputRef.current?.value.length || 0;

      inputRef.current?.setSelectionRange(length, length);

      if (isResultsShown) {
        setIsSearchInputFocused(false);
      } else {
        inputRef.current?.blur();
      }
    }

    if (e.code === "ArrowUp" || e.code === "ArrowDown") {
      e.preventDefault();
    }

    if (e.code === "Enter" && activeResultId) {
      setQuery(activeQuery);
      setActiveResultId(null);
      setActiveQuery("");
      setIsSearchInputFocused(false);
    }
  };

  const changeActiveDown = () => {
    setActiveResultId((prev) => {
      if (prev === null) {
        return 0;
      }
      if (prev >= results.length - 1) {
        return null;
      }
      return prev + 1;
    });
  };

  const changeActiveUp = () => {
    setActiveResultId((prev) => {
      if (prev === null) {
        return results.length - 1;
      }
      if (prev <= 0) {
        return null;
      }
      return prev - 1;
    });
  };

  const onKeyInputUp = (e: TypeKeyboardEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if ((e.code === "ArrowUp" || e.code === "ArrowDown") && !isResultsShown) {
      setIsSearchInputFocused(true);
      setActiveResultId(null);
      return;
    }

    if (e.code === "ArrowUp") {
      changeActiveUp();
    }

    if (e.code === "ArrowDown") {
      changeActiveDown();
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 640) {
      inputRef.current?.focus();
    }
  }, []);

  const onKeyDown = useMemo(
    () => (e: KeyboardEvent) => {
      if (e.code === "Slash" && !isSearchInputFocused) {
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      }
    },
    [isSearchInputFocused],
  );

  const changeActiveText = useMemo(
    () => () => {
      const activeText = activeResultId !== null ? results[activeResultId] : "";

      setActiveQuery(activeText);
    },
    [activeResultId, results, setActiveQuery],
  );

  useEffect(() => {
    changeActiveText();
  }, [activeResultId]);

  useEffect(() => {
    document.addEventListener("keydown", (e: KeyboardEvent) => onKeyDown(e));

    return () => {
      document.removeEventListener("keydown", (e: KeyboardEvent) =>
        onKeyDown(e),
      );
    };
  }, [isSearchInputFocused, onKeyDown]);

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setActiveResultId(null);
    setActiveQuery("");
    setQuery(e.target.value);
    setIsSearchInputFocused(false);
  };

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className={classes}
        value={activeResultId !== null ? activeQuery : query}
        onChange={changeInput}
        onFocus={() => setIsSearchInputFocused(true)}
        onBlur={() => setIsSearchInputFocused(false)}
        onClick={() => setIsSearchInputFocused(true)}
        onKeyDown={onKeyInputDown}
        onKeyUp={onKeyInputUp}
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
