import axios from "axios";
import { useEffect, useState } from "react";

interface options {
    method: string,
    url: string,
    params: {},
    headers: {}
}

export const useFindMovie = (id: string) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [movies, setMovies] = useState<[]>([])

    const options: options = {
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}`,
        params: {
            api_key: "8fa799d9ed64f37163d9d60cfa8dbdda"
        },
        headers: { accept: "application/json" }
    }

    useEffect(() => {
        (async () => {
            try {
                if (loading) return
                setLoading(true)
                const response = await axios.request(options)
                setMovies(response.data)
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false)
            }
        })()
    }, [id])

    return { movies, loading }
}