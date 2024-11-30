"use client";
import { useParams } from "next/navigation";
import { useFindMovie } from "@/hooks/useFindMovie";
import Loading from "@/widgets/Loading/Loading";

const MovieDetails = () => {
  const { id }: { id: string } = useParams();
  const { movies, loading } = useFindMovie(id);

  console.log(movies);

  return <div>{loading ? <Loading className="" /> : <p>ID: {id}</p>}</div>;
};

export default MovieDetails;
