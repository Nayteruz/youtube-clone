import { FC, useEffect, useRef } from "react";

export const InputSearch: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const classes = `w-full px-3 shadow-inner rounded-bl-sm rounded-tl-sm border border-gray-300 focus:border-blue-700 focus:outline-none`;

  useEffect(() => {
    if (inputRef.current && window.innerWidth <= 640) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Search"
      className={classes}
    />
  );
};
