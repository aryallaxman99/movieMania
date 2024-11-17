"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import axios from "axios";
const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<any>([]);

  useEffect(() => {
    try {
      if (loading) return;
      setLoading(true);
      axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
      axios
        .get(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=8fa799d9ed64f37163d9d60cfa8dbdda&page=1"
        )
        .then((res) => setMovie(res.data.results));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

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
            {movie?.map((items: any, index: number) =>
              index < 3 ? (
                <ProductItem
                  key={index}
                  title={items.title}
                  href={`https://marketplace.canva.com/EAF9bttRWYM/1/document_450w/canva-black-white-creative-coming-soon-instagram-reel-xunaLow9GuM.mp4`}
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
