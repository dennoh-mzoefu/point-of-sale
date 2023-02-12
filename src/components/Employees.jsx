import React, { Fragment, useState } from "react";
import { GiDividedSpiral } from "react-icons/gi";
import { useSelector } from "react-redux";

function Employees() {
  const { users } = useSelector((state) => state.user);
  const [state, setstate] = useState(users);
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div>Name</div>
        <div>Role</div>
        {/* <div>Confirm</div> */}
      </div>
      {state?.map((user, index) => {
        <div key={index} className="flex">
          {console.log(user.displayName)}
          <div className="text-red-700">{user?.displayName}</div>
          <div className="text-white">{user?.email}</div>
          {/* <div>Confirm</div> */}
        </div>;
      })}
    </div>
  );
}

export default Employees;
