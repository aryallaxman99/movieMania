"use client";
import Input from "@/widgets/Input/Input";
import { useState } from "react";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="w-full flex relative pl-4 max-w-xl mx-auto dark:bg-zinc-800 h-12 rounded-full overflow-hidden mt-10">
      <Input
        type="input"
        className="dark:bg-zinc-800 h-12 border-hidden focus:outline-0"
        placeholder="Search..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchText(e.target.value)
        }
      />
      <div className="mt-4 mr-4 hover:cursor-pointer">
        <ArrowLogo />
      </div>
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
