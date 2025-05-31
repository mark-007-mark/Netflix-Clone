import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestions = () => {
  const { searchedMovies: movies } = useSelector((store) => store.gpt);

  if (!movies) return null;

  return (
    <div className="pl-4 md:px-14 w-screen py-8 my-6 bg-black bg-opacity-90 min-h-screen">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
        Search Results
      </h2>
      <div className="flex flex-wrap justify-center md:justify-start pr-12 gap-4 w-screen md:gap-6">
        {movies.map(
          (movie) =>
            movie.poster_path && (
              <div
                key={movie.id}
                className="w-40 md:w-48 transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <MovieCard image={movie.poster_path} />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <p className="text-white text-sm font-semibold line-clamp-2">
                      {movie.title}
                    </p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
