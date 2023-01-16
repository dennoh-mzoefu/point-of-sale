import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "../../utils/firebase";

function Login() {
  const handleClick = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };
  return (
    <div>
      <div className="flex align-center m-auto  items-center justify-center">
        Sign up
        <div className="w-full  rounded-lg shadow-lg shadow-slate-900/60 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <button
              type="submit"
              onClick={(e) => handleClick(e)}
              className=" flex text-2xl items-center justify-center w-full text-slate-50 bg-primary-600 hover:bg-slate-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-md text-xl px-5 py-2.5 text-center bg-slate-600 hover:bg-slate-300 hover:text-slate-900 dark:focus:ring-primary-800"
            >
              <FcGoogle className="text-2xl mr-4" /> Sign in with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
