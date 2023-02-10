import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiUserCircle } from "react-icons/bi";
import logo from "../assets/resturant-logo.svg";
import { GrNotification } from "react-icons/gr";
import { auth } from "../../utils/firebase";

function Navbar() {
  const [user, loading] = useAuthState(auth);
  console.log({ user });
  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <div className="overflow-hidden  sticky top-0 z-10 flex justify-between w-full p-4 items-center bg-zinc-50  border-b pb-2 border-b-green-700">
      <div className="flex items-center"></div>
      <div className="flex">
        {user && (
          <img
            src={user?.photoURL}
            // alt="pesonal image"
            className="w-0"
            width="50"
            height="60"
          />
        )}

        {user ? (
          <img
            src={user?.photoURL}
            alt="pesonal image"
            className="mx-5 rounded-full"
            width="40"
            height="40"
          />
        ) : (
          <BiUserCircle className="text-3xl  mx-5" />
        )}
        {user ? (
          <p className="text-xl" onClick={() => handleLogout()}>
            Logout
          </p>
        ) : (
          <p className="text-xl">Login</p>
        )}
        <GrNotification className="text-3xl mx-5" />
      </div>
    </div>
  );
}

export default Navbar;
