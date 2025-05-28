import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const user = useSelector((store) => store.user);
  const displayName = user?.displayName || "User";

  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  useNowPlayingMovies();

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
        <img
          className="w-44"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />

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
      <MainContainer />
    </>
  );
};

export default Browse;
