"use client";
import { useParams } from "next/navigation";
import { useFindMovie } from "@/hooks/useFindMovie";
import Loading from "@/widgets/Loading/Loading";
import Image from "next/image";
import Link from "next/link";

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
        <Image
          className="rounded-md hover:blur-sm"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
          width={300}
          height={400}
          unoptimized
        />
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
              <p>{movie?.runtime}m</p>
            </span>
          </div>
          <div className="mt-32">
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
        </main>
      </div>
    </div>
  );
};
