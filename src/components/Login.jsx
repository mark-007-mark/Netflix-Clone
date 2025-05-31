import { Validate } from "../utils/validate";
import Header from "./Header";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "../utils/userSlice";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { NETFLIX_BACKGROUND } from "../utils/constants";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [IsSignIn, setIsSignIn] = useState(true);
  const [message, setMessage] = useState(null);
  const handleSignIn = () => {
    setIsSignIn(!IsSignIn);
  };
  const handleSubmit = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = !IsSignIn && name.current.value ? name.current.value : "";
    const msg = Validate(emailValue, passwordValue);
    setMessage(msg);
    if (msg) {
      return;
    }
    if (!IsSignIn) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
          })
            .then(() => {
              const { uid, displayName, email } = user || {};
              dispatch(
                setUser({
                  uid,
                  displayName,
                  email,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              console.error("Error updating profile:", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error signing up:", errorCode, errorMessage);
          setMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid, displayName, email } = user;
          dispatch(
            setUser({
              uid,
              displayName,
              email,
            })
          );
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error signing in:", errorCode, errorMessage);
          setMessage(errorMessage);
        });
    }
  };
  return (
    <div className="relative h-screen">
      <Header />
      <img
        className="absolute w-full h-full object-cover"
        src={NETFLIX_BACKGROUND}
        alt="Netflix Login Background"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-4/12 min-w-[300px] bg-black bg-opacity-80 p-12 text-white rounded-lg "
        >
          <h1 className="text-3xl font-bold py-4">
            {IsSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!IsSignIn && (
            <input
              ref={name}
              className="p-2 my-2 w-full rounded bg-gray-700"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="p-2 my-2 w-full rounded bg-gray-700"
            type="email"
            placeholder="Email"
          />
          <input
            ref={password}
            className="p-2 my-2 w-full rounded bg-gray-700"
            type="password"
            placeholder="Password"
          />
          {message && <p className="text-red-500 text-sm my-2">{message}</p>}
          <button
            onClick={handleSubmit}
            className="bg-red-700 w-full p-4 my-6 rounded"
            type="submit"
          >
            {IsSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={handleSignIn} className="p-4 cursor-pointer">
            {IsSignIn
              ? "New to Netflix?Sign up now."
              : "Already having an account? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
