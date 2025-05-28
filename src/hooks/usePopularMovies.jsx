import { options } from "../utils/constants";
import { setPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const callAPI = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );
      const json = await response.json();
      dispatch(setPopularMovies(json.results));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    callAPI();
  }, []);

  return null;
};

export default usePopularMovies;
