import React, { Fragment, useState } from "react";
import { GiDividedSpiral } from "react-icons/gi";
import { useSelector } from "react-redux";

function Employees() {
  const { users } = useSelector((state) => state.user);
  const [state, setstate] = useState(users);
  return (
    <div className="flex flex-col min-w-max w-44 items-center shadow-sm bg-stone-300/30">
      <div className="flex my-2 border-b">
        <h2 className="text-xl text-purple-900 pb-1">Employees</h2>
      </div>
      {state?.map((user, index) => {
        return (
          <div className=" w-full flex justify-around items-center mb-1 bg-stone-300/60">
            {console.log(user.displayName)}
            <div className="mx-3  justify-self-start w-full p-2 bg-stone-800/60 text-ssm font-bold text-white">
              {user?.displayName}
            </div>
            <div className="mx-3 p-2 bg-stone-200">{user?.roles}</div>
            <div className="mx-3 p-2 bg-stone-500">
              <select>
                <option>change roles</option>
                <option>waiter</option>
                <option>chef</option>
                <option>admin</option>
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Employees;
