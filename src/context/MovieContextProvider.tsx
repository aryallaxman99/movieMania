"use client";
import React, { useState } from "react";
import MovieContext from "./MovieContext";

const MovieContextProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [movieLists, setMovieLists] = useState<[]>([]);
  return (
    <MovieContext.Provider value={{ movieLists, setMovieLists }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
