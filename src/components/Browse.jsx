import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { toggleGptSearch } from "../utils/gptSlice";
import GptSearch from "./GptSearch";
import { NETFLIX_LOGO } from "../utils/constants";

const Browse = () => {
  const dispatch = useDispatch();
  const buttonClicked = useSelector((store) => store.gpt.showgptSearch);
  const user = useSelector((store) => store.user);
  const displayName = user?.displayName || "User";
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const handlegptSearch = () => {
    dispatch(toggleGptSearch());
  };
  useNowPlayingMovies();
  usePopularMovies();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
        <img className="w-44" src={NETFLIX_LOGO} alt="Netflix Logo" />

        <div className="relative flex items-center gap-4">
          <button
            onClick={handlegptSearch}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition-colors duration-300 font-medium text-sm"
          >
            {buttonClicked ? "Home" : "Search"}
          </button>

          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <img
              className="w-10 h-10 rounded-full cursor-pointer"
              src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-2.png"
              alt="person"
            />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-black/90 rounded-md shadow-lg border border-gray-700">
                <ul className="py-1">
                  <li className="px-4 py-2 hover:bg-gray-700 text-white cursor-pointer">
                    {displayName || "User"}
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 text-white cursor-pointer">
                    Account & Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-700 text-white cursor-pointer">
                    Help
                  </li>
                  <li
                    onClick={handleLogOut}
                    className="px-4 py-2 hover:bg-gray-700 text-white cursor-pointer border-t border-gray-700"
                  >
                    Log Out
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {buttonClicked ? (
        <GptSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
