import { InputSearch } from "./InputSearch";
import { ButtonSearch } from "./ButtonSearch";
import { FC } from "react";

export const Search: FC = () => {
  return (
    <div className="flex w-full mr-2">
      <InputSearch />
      <ButtonSearch />
    </div>
  );
};
