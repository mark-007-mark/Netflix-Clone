import React, { useEffect } from "react";
import { options } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const [trailerId, setTrailerId] = React.useState(null);
  const getmovieClips = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        options
      );
      const json = await response.json();
      const trailer = json.results.filter(
        (result) => result.type === "Trailer"
      );
      const clip = trailer.length > 0 ? trailer[0] : json.results[0];
      console.log("clip", clip);
      setTrailerId(clip.key);
    } catch (error) {
      console.error("Error fetching movie clips:", error);
    }
  };

  useEffect(() => {
    getmovieClips();
  }, [movieId]);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
