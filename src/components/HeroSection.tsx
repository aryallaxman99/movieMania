"use client";
import { HeroParallax } from "./ui/hero-parallax";
import { useGetData } from "@/hooks/useGetData";
const HeroSection = () => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      api_key: "8fa799d9ed64f37163d9d60cfa8dbdda",
      query: "any",
      with_genres: "",
      language: "en-US",
    },
    headers: { accept: "application/json" },
  };

  const { movies, loading } = useGetData(options);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <HeroParallax products={movies} />
    </>
  );
};

export default HeroSection;
