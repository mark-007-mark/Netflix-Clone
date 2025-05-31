import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BACKGROUND } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-0 left-0 -z-10 w-screen h-screen">
        <img
          className="h-screen object-cover w-screen"
          src={NETFLIX_BACKGROUND}
          alt="Netflix Logo"
        />
      </div>
      <div className="pt-[10%]">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
