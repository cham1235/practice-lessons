import { useEffect, useState } from "react";
import apiClient from "../service/api-client";
import { CanceledError } from "axios";

interface FetchGamesRespose {
  count: number;
  results: Game[];
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const controller = new AbortController();
  useEffect(() => {
    apiClient
      .get("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { games, error };
};

export default useGame;
