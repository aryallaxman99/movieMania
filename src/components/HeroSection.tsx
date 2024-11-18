"use client";
import { HeroParallax } from "./ui/hero-parallax";
import { useGetData } from "@/hooks/useGetData";
const HeroSection = () => {
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
