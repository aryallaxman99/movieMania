import { createContext } from "react";

interface MovieContextType {
    movieLists: [];
    setMovieLists: (movieLists: any) => void;
}
const MovieContext = createContext<MovieContextType>({
    movieLists: [],
    setMovieLists: () => []
});

export default MovieContext