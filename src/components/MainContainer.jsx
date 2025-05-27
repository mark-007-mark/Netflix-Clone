import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlaying);
  if (!movies) return;
  const { original_title, overview, id } = movies[0];
  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </>
  );
};

export default MainContainer;
