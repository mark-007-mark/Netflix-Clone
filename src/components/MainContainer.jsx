import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlaying);
  if (!movies) return;
  const { original_title, overview } = movies[0];
  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
    </>
  );
};

export default MainContainer;
