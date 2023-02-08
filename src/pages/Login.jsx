import { signInWithPopup } from "firebase/auth";
import { getDoc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import {
  auth,
  provider,
  salesColRef,
  signInWithGoogle,
} from "../../utils/firebase";
import { addUser, fetchUser } from "../redux/userSlice";

function Login() {
  const [uid, setUid] = useState("");
  const [state, setState] = useState(false);
  const [searchedUser, setSearchedUser] = useState(null);
  const dispatch = useDispatch();
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result?.user?.uid);
        dispatch(addUser(result));
      })
      .catch((error) => {
        console.log(error);
        //   return error;
      });
  };

  return (
    <div>
      {console.log({ uid })}
      {console.log({ searchedUser })}
      <div className="flex flex-col align-center m-auto  items-center justify-center">
        Sign up
        <div className="w-full  rounded-lg shadow-lg shadow-slate-900/60 dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <button
              type="submit"
              onClick={() => handleClick()}
              className=" flex text-2xl items-center justify-center w-full text-slate-50 bg-primary-600  focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-md  px-5 py-2.5 text-center bg-slate-600 hover:bg-slate-300 hover:text-slate-900 dark:focus:ring-primary-800"
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
