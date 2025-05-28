import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute top-0 px-24 bg-gradient-to-r from-black">
      <div className="mt-[26%] w-full">
        <h1 className="text-5xl font-bold text-white w-1/4 max-w-2xl">{title}</h1>
        <p className="text-white text-lg max-w-96 py-6 line-clamp-3">{overview}</p>
        <div className="flex gap-4">
          <button className="bg-white text-black py-3 px-8 text-xl rounded-lg hover:bg-opacity-80 transition flex items-center gap-2">
            <span>▶</span> Play
          </button>
          <button className="bg-gray-500 bg-opacity-50 text-white py-3 px-8 text-xl rounded-lg hover:bg-opacity-70 transition flex items-center gap-2">
            <span>ℹ</span> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
