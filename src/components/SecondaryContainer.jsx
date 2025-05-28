import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movie?.nowPlaying);
  const popularmovies = useSelector((store) => store?.movie?.popularMovies);

  return (
    <div className="bg-black w-screen">
      <div className="p-4">
        <h1 className="text-lg md:text-xl text-white py-2">Now Playing</h1>
        <div className="w-screen flex overflow-x-scroll scrollbar-hide">
          <div className="flex gap-4">
            {movies?.map((movie) => (
              <div key={movie.id} className="flex-shrink-0 w-36 md:w-48">
                <MovieCard key={movie.id} image={movie.poster_path} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-lg md:text-xl text-white py-2">Popular Movies</h1>
        <div className="w-screen flex overflow-x-scroll scrollbar-hide">
          <div className="flex gap-4">
            {popularmovies?.map((movie) => (
              <div key={movie.id} className="flex-shrink-0 w-36 md:w-48">
                <MovieCard key={movie.id} image={movie.poster_path} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryContainer;
