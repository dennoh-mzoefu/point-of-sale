import React, { Fragment, useEffect, useState } from "react";
import { GiDividedSpiral } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { updateRoles } from "../redux/userSlice";

function Employees() {
  const { users } = useSelector((state) => state.user);
  const [state, setstate] = useState(null);
  const [role, setRole] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    console.log(e.target.value);
    setRole(e?.target?.value);
  };
  useEffect(() => {
    console.log({ role });
    state && role && dispatch(updateRoles({ ...state, role }));
  }, [role]);
  return (
    <div className="flex flex-col min-w-max w-44 items-center shadow-sm bg-stone-300/30">
      <div className="flex flex-col my-2 border-b">
        <h2 className="text-xl text-purple-900 pb-1">Employees</h2>
      </div>
      <div className=" w-full flex justify-around p-2  mb-1 bg-stone-600/60">
        <div className="">Name</div>
        <div className="">Current</div>
        <div className="">Change</div>
      </div>
      {users?.map((user, index) => {
        return (
          <div
            className=" w-full flex justify-around items-center mb-1 bg-stone-300/60"
            key={index}
          >
            {console.log(user.displayName)}
            <div className="mx-3  justify-self-start w-full p-2 bg-stone-00/60 text-ssm font-bold text-white">
              {user?.displayName}
            </div>
            <div className="mx-3 p-2 bg-stone-200">{user?.roles}</div>
            <div className="mx-3 p-2 ">
              <select
                onChange={(e) => {
                  setRole(e?.target?.value);
                  setstate(user);
                }}
              >
                <option disabled>change roles</option>
                <option value="waiter">waiter</option>
                <option value="chef">chef</option>
                <option value="admin">admin</option>
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Employees;
