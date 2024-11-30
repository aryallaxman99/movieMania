"use client";
import { HeroParallax } from "./ui/hero-parallax";
import { useGetData } from "@/hooks/useGetData";
import { useContext, useEffect } from "react";
import MovieContext from "@/context/MovieContext";
import Loading from "@/widgets/Loading/Loading";

const HeroSection = () => {
  const { setMovieLists } = useContext(MovieContext);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: {
      with_genres: "",
      language: "en-US",
      region: "NP",
    },
    headers: { accept: "application/json" },
  };

  const { movies, loading } = useGetData(options);

  useEffect(() => {
    setMovieLists((prev: []) => [prev, ...movies].flat());
  }, [movies]);

  return (
    <>
      {loading ? <Loading className="" /> : <HeroParallax products={movies} />}
    </>
  );
};

export default HeroSection;
