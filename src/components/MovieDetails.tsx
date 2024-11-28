"use client";
import { useContext } from "react";
import { useParams } from "next/navigation";
import MovieContext from "@/context/MovieContext";

const MovieDetails = () => {
  const { id }: { id: string } = useParams();
  const { movieLists } = useContext(MovieContext);
  console.log(movieLists);

  return <p>ID: {id}</p>;
};

export default MovieDetails;
