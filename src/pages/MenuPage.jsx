import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { auth } from "../../utils/firebase";
import AddStock from "../components/AddStock";
import Menu from "../components/Menu/Menu";
import PreOrders from "../components/Orders/PreOrders";

function MenuPage() {
  const { currentUser, users } = useSelector((state) => state.user);
  const [user, loading] = useAuthState(auth);

  const [role, setRole] = useState(currentUser?.roles);
  useEffect(() => {
    users &&
      user &&
      setRole(users.filter((item) => item.uid == user.uid)[0]?.roles);
  }, [user, users]);
  return (
    <div className=" w-full mt-2 ml-2 ">
      <div className="flex w-full justify-between">
        <Menu className="" />
        <div className=" flex flex-col min-w-4/12">
          <PreOrders />
          {role == "admin" && <AddStock />}
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
