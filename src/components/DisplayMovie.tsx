import React from "react";
import { FocusCards } from "./ui/focus-cards";

const DisplayMovie = (movies: any) => {
  const { movie } = movies;

  return (
    <div className="my-10">
      {!movie.length ? (
        <div className="text-center text-3xl">Movies not found.</div>
      ) : (
        <FocusCards cards={movie} />
      )}
    </div>
  );
};

export default DisplayMovie;
