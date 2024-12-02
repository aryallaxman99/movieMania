"use client";
import { useParams } from "next/navigation";
import { useFindMovie } from "@/hooks/useFindMovie";
import Loading from "@/widgets/Loading/Loading";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MovieDetails = () => {
  const { id }: { id: string } = useParams();
  const { movies, loading, errorMessage } = useFindMovie(id);

  return (
    <div>
      {loading ? (
        <Loading className="" />
      ) : errorMessage ? (
        <h1 className="text-3xl text-center text-red-500 mt-10">
          {errorMessage}
        </h1>
      ) : (
        <MovieUI movie={movies} id={id} />
      )}
    </div>
  );
};

export default MovieDetails;

export const MovieUI = (props: any) => {
  const { movie, id } = props;
  console.log(movie);

  return (
    <div>
      <Image
        className="blur md:blur-none opacity-25 absolute"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} //w500
        alt={`Background image of ${movie.original_title}`}
        fill
        unoptimized
      />
      <div className="p-10 absolute flex gap-10">
        <Link
          href={
            movie.imdb_id
              ? `https://www.imdb.com/title/${movie.imdb_id}`
              : `/movie/${id}`
          }
          target="_blank"
        >
          <Image
            className="rounded-md hover:blur-sm"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`poster image of ${movie.title}`}
            width={300}
            height={400}
            unoptimized
          />
        </Link>
        <main>
          <div>
            <div className="flex gap-3 text-3xl">
              <Link
                className="font-bold hover:text-zinc-400"
                href={movie.homepage ? movie.homepage : `/movie/${id}`}
                target="_blank"
              >
                {movie.title}
              </Link>
              <h2 className="font-light text-zinc-400">
                {movie.release_date
                  ? `(${movie.release_date.split("-")[0]})`
                  : ""}
              </h2>
            </div>
            <span className="flex space-x-2 font-serif font-semibold text-zinc-400">
              <p>{movie.status}</p>
              <p>{movie.release_date} </p>
              <div className="flex space-x-2">
                {movie.genres?.map((genre: any) => (
                  <p key={genre.id}>{genre.name}</p>
                ))}
              </div>
              <p>{movie.runtime ? `${movie.runtime}m` : null}</p>
            </span>
          </div>
          <div className="w-14 h-14 mt-10">
            {movie.vote_average ? (
              <CircularProgressbar
                className="bg-gray-900 overflow-hidden rounded-full font-bold"
                value={movie.vote_average * 10}
                text={`${Math.floor(movie.vote_average * 10)}%`}
                styles={buildStyles({
                  textColor: "white",
                  pathColor: "green",
                  trailColor: "white",
                })}
              />
            ) : null}
          </div>
          <div className="mt-10">
            <div>
              <p className="font-mono font-medium text-base text-zinc-400">
                {movie.tagline}
              </p>
              {movie.overview ? (
                <>
                  <h1 className="text-2xl font-medium">Overview</h1>
                  <p className="text-base">{movie.overview}</p>
                </>
              ) : null}
            </div>
            <div className="flex space-x-4 mt-3 font-bold text-sm text-zinc-400">
              <p>{movie.budget ? `Budget: $${movie.budget}` : null} </p>
              <p>{movie.revenue ? `Revenue: $${movie.revenue}` : null}</p>
            </div>
            <div className="mt-3">
              {movie.production_companies ? (
                <>
                  <h2 className="text-2xl font-medium">Production companies</h2>
                  <div className="flex mt-2">
                    <AnimatedTooltip items={movie.production_companies} />
                  </div>
                </>
              ) : null}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
