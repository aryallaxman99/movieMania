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
      axios
        .get(
          "https://api.reelgood.com/v3.0/content/browse/filtered?availability=onAnySource&content_kind=movie&hide_seen=false&hide_tracked=false&hide_watchlisted=false&imdb_end=10&imdb_start=0&region=us&rg_end=100&rg_start=0&skip=100&sort=1&take=15&year_end=2024&year_start=2008"
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
