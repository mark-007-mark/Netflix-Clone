import { useDispatch } from "react-redux";
import React, { useState, useCallback } from "react";
import { options } from "../utils/constants";
import { setSearchedMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  const fetchMovies = async (query) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
        options
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      dispatch(setSearchedMovies(data.results));
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Failed to search movies. Please try again.");
    }
  };

  // Debounced function using useCallback
  const debouncedSearch = useCallback(
    (() => {
      let timeoutId;
      return (searchText) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          if (searchText.trim()) {
            fetchMovies(searchText);
          }
        }, 700);
      };
    })(),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setError("");
    debouncedSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      fetchMovies(searchQuery);
    }
  };

  return (
    <div className="pt-[10%] flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder="What would you like to watch today?"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-800"
          type="submit"
        >
          Search
        </button>
      </form>
      {error && (
        <div className="mt-4 text-red-500 bg-black/60 p-2 rounded">{error}</div>
      )}
    </div>
  );
};

export default GptSearchBar;
