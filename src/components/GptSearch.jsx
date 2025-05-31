import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BACKGROUND } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 -z-10 w-screen h-screen">
        <img 
          className="h-screen object-cover w-screen"
          src={NETFLIX_BACKGROUND} 
          alt="Netflix Logo" 
        />
      </div>
      <div className="absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
