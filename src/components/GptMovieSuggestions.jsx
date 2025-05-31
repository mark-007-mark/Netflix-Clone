import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestions = () => {
  const { searchedMovies: movies } = useSelector((store) => store.gpt);

  if (!movies) return null;

  return (
    <div className="px-14 mt-8 bg-black bg-opacity-90 w-screen">
      <div className="flex flex-wrap gap-4">
        {movies.map(
          (movie) =>
            movie.poster_path && (
              <div key={movie.id} className="w-36 md:w-48">
                <MovieCard image={movie.poster_path} />
                <p className="text-white text-sm mt-2">{movie.title}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
