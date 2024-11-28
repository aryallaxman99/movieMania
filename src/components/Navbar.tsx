"use client";
import { useEffect, useState, useContext } from "react";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useGetData } from "@/hooks/useGetData";
import MovieContext from "@/context/MovieContext";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const { setMovieLists } = useContext(MovieContext);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day",
    params: {
      page: "1",
    },
    headers: { accept: "application/json" },
  };

  const { movies, loading } = useGetData(options);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  useEffect(() => {
    setMovieLists((prev: []) =>
      [prev, ...movies.filter((item: any, index: number) => index < 3)].flat()
    );
  }, [movies]);

  return (
    <div
      className={cn("w-full mt-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>

        <MenuItem setActive={setActive} active={active} item="Trending">
          <div className="text-sm grid grid-row-1 gap-10 p-4">
            {movies?.map((items: any, index: number) =>
              index < 3 ? (
                <ProductItem
                  key={index}
                  title={items.title}
                  href={`movie/${items.id}`}
                  src={`https://image.tmdb.org/t/p/w500//${items.poster_path}`}
                  description={items.overview}
                />
              ) : null
            )}
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us" />
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
