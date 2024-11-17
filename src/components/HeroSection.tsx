"use client";
import axios from "axios";
import { HeroParallax } from "./ui/hero-parallax";
import { useEffect, useState } from "react";
const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      if (loading) return;
      setLoading(true);
      axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=8fa799d9ed64f37163d9d60cfa8dbdda&query=any&with_genres=&language=en-US"
        )
        .then((res) => setMovies(res.data.results));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <HeroParallax products={movies} />
    </>
  );
};

export default HeroSection;
