"use client";
import { useSearchData } from "@/hooks/useSearchData";
import Input from "@/widgets/Input/Input";
import { useContext, useEffect, useState } from "react";
import DisplayMovie from "./DisplayMovie";
import MovieContext from "@/context/MovieContext";

const SearchBox = () => {
  const [searchText, setSearchText] = useState<string>("");
  const { movies, click, setClick } = useSearchData(searchText);
  const { setMovieLists } = useContext(MovieContext);
  const buttonClick = () => {
    if (click) return;
    setClick(true);
  };

  useEffect(() => {
    setMovieLists((prev: []) => [prev, ...movies].flat());
  }, [click]);

  return (
    <div>
      <div className="w-full flex relative pl-4 max-w-xl mx-auto dark:bg-zinc-800 h-12 rounded-full overflow-hidden mt-10">
        <Input
          type="input"
          className="dark:bg-zinc-800 h-12 border-hidden focus:outline-0"
          placeholder="Search..."
          value={searchText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchText(e.target.value)
          }
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
            e.key === "Enter" ? setClick(true) : null
          }
        />

        <div
          className="mt-4 mr-4 hover:cursor-pointer"
          onClick={() => buttonClick()}
        >
          <ArrowLogo />
        </div>
      </div>
      <DisplayMovie movie={movies} />
    </div>
  );
};

export default SearchBox;

const ArrowLogo = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
    </svg>
  );
};
