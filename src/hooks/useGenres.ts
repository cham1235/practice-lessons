import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../service/api-client";

interface FetchGamesRespose {
  count: number;
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGamesRespose>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenre;
