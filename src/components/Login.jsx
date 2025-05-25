import Header from "./Header";
import React, { useState } from "react";
const Login = () => {
  const [IsSignIn, setIsSignIn] = useState(true);
  const handleSignIn = () => {
    setIsSignIn(!IsSignIn);
  };
  return (
    <div className="relative h-screen">
      <Header />
      <img
        className="absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
        alt="Netflix Login Background"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <form className="w-4/12 min-w-[300px] bg-black bg-opacity-80 p-12 text-white rounded-lg ">
          <h1 className="text-3xl font-bold py-4">
            {IsSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!IsSignIn && (
            <input
              className="p-2 my-2 w-full rounded bg-gray-700"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            className="p-2 my-2 w-full rounded bg-gray-700"
            type="email"
            placeholder="Email"
          />
          <input
            className="p-2 my-2 w-full rounded bg-gray-700"
            type="password"
            placeholder="Password"
          />
          <button className="bg-red-700 w-full p-4 my-6 rounded" type="submit">
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
