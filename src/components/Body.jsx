import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
     const unsubscirbe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user || {};
        dispatch(
          setUser({
            uid,
            displayName,
            email,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscirbe();
  }, []);

  return (
    <>
      <Login />
    </>
  );
};

export default Body;
