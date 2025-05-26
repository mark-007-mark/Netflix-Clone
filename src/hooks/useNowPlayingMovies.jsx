import { options } from "../utils/constants";
import { setNowPlaying } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const callAPI = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options
      );
      const json = await response.json();
      dispatch(setNowPlaying(json.results));
      console.log(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    callAPI();
  }, []);
};

export default useNowPlayingMovies;
