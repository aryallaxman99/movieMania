import axios from "axios";
import { useEffect, useState } from "react";

interface options{
    method:string,
    url:string,
    params:any,
    headers:any
  }
export const useGetData = (options:options) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      try {
        if (loading) return;
        setLoading(true);
        axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
        axios.request(options).then((res) => setMovies(res.data.results));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }, []);
  
    return {movies,loading};
}
