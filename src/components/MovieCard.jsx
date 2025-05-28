import React from "react";
import { IMAGE_BASE_URL } from "../utils/constants";

const MovieCard = ({ title, movies, image }) => {
  const imageBaseUrl = IMAGE_BASE_URL + image;

  return (
    <div className="flex-none">
      <img
        className="w-32 md:w-40 rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
        src={imageBaseUrl}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
