import React, { useState } from "react";

const GptSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg"
          placeholder="What would you like to watch today?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-800"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
