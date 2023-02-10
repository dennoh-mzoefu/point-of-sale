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
import "./login.css";
import logo from "../assets/resturant-logo.svg";
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
    <div className="w-full min-h-screen bg-zinc-700 flex items-center justify-center flex-col">
      <div className=" h-fit w-fit aboveLogin rounded-full">
        <img className="h-44 mx-auto mb-0" src={logo} />
      </div>
      <div className="flex flex-col w-full align-center  mx-auto  items-center justify-center ">
        <div className="w-2/3 flex flex-col align-center mx-auto  items-center justify-center rounded-lg shadow-lg   md:mt-0 sm:max-w-md xl:p-0 bg-zinc-800 loginCard ">
          <button
            type="submit"
            onClick={() => handleClick()}
            className=" flex  items-center justify-center w-full text-slate-50 bg-primary-600  focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-md  px-5 py-2.5 text-center"
          >
            <FcGoogle className="iconGoogle text-8xl mr-4" />
          </button>
        </div>
        {/* <p>click card to sign in</p> */}
      </div>
    </div>
  );
}

export default Login;
