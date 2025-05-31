import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import VideoBackground from "./VideoBackground";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movie?.nowPlaying);
  const popularmovies = useSelector((store) => store?.movie?.popularMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleModalClose = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      setSelectedMovie(null);
    }
  };

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        setSelectedMovie(null);
      }
    };

    if (selectedMovie) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [selectedMovie]);

  return (
    <div className="bg-black w-screen">
      <div className="p-4">
        <h1 className="text-lg md:text-xl text-white py-2">Now Playing</h1>
        <div className="w-screen flex overflow-x-scroll scrollbar-hide">
          <div className="flex gap-4">
            {movies?.map((movie) => (
              <div
                key={movie.id}
                className="flex-shrink-0 w-36 md:w-48 cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => handleMovieClick(movie)}
              >
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
              <div
                key={movie.id}
                className="flex-shrink-0 w-36 md:w-48 cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => handleMovieClick(movie)}
              >
                <MovieCard key={movie.id} image={movie.poster_path} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedMovie && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center modal-backdrop overflow-y-auto py-8"
          onClick={handleModalClose}
        >
          <div className="relative w-[95%] md:w-[90%] max-w-5xl bg-zinc-900 rounded-lg overflow-hidden shadow-2xl transform transition-all my-auto">
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute right-3 top-3 z-50 text-white bg-red-600 p-2.5 rounded-full hover:bg-red-700 transition-colors duration-300 flex items-center justify-center w-10 h-10 shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="max-h-[40vh] md:max-h-[60vh] lg:max-h-[70vh]">
              <VideoBackground movieId={selectedMovie.id} />
            </div>

            <div className="p-6 md:p-8 bg-gradient-to-b from-zinc-900/95 to-zinc-900 max-h-[60vh] overflow-y-auto">
              <h3 className="text-2xl md:text-3xl text-white font-bold mb-3 leading-tight">
                {selectedMovie.title}
              </h3>
              <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
                {selectedMovie.overview}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-400 sticky bottom-0 bg-zinc-900/95 py-4">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  <span>{selectedMovie.release_date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-yellow-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <span>{selectedMovie.vote_average.toFixed(1)}/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
