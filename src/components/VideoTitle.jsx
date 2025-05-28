import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-52 px-12 absolute text-white">
      <h1 className="text-6xl font-bold w-2/6">{title}</h1>
      <p className="py-6 text-lg w-2/5">{overview}</p>
      <div className="flex gap-3">
        <button className="bg-gray-500 text-white py-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80 flex items-center">
          ▶ Play
        </button>
        <button className="mx-2 bg-gray-500 text-white py-4 px-12 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-40 flex items-center">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
