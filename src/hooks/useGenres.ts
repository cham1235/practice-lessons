import genres from "../data/genres";
// import useData from "./useData";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// from API
// const useGenres = () => useData<Genre>("/genres");
const useGenre = () => ({ data: genres, isLoading: false, error: null });

export default useGenre;
