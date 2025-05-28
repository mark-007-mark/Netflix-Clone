import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movie?.nowPlaying);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Now Playing</h1>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movies={movies} image={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default SecondaryContainer;
