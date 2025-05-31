import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import VideoBackground from "./VideoBackground";

const GptMovieSuggestions = () => {
  const { searchedMovies: movies } = useSelector((store) => store.gpt);
  const [selectedMovie, setSelectedMovie] = useState(null);

  if (!movies) return null;

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  const handleModalClose = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      setSelectedMovie(null);
    }
  };

  // Add useEffect to handle ESC key
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
    <div className="px-6 md:px-14 w-screen my-8 py-6 bg-black bg-opacity-90 min-h-screen">
      <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
        Search Results
      </h2>
      <div className="flex flex-wrap justify-center md:justify-start gap-4 w-screen md:gap-6">
        {movies.map(
          (movie) =>
            movie.poster_path && (
              <div
                key={movie.id}
                className="w-40 md:w-48 transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleMovieClick(movie)}
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

export default GptMovieSuggestions;
