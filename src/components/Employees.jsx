import React, { Fragment } from "react";
import { GiDividedSpiral } from "react-icons/gi";
import { useSelector } from "react-redux";

function Employees() {
  const { users } = useSelector((state) => state.user);
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div>Name</div>
        <div>Role</div>
        {/* <div>Confirm</div> */}
      </div>
      {users?.map((user, index) => {
        <div key={index} className="flex">
          {console.log(user.displayName)}
          <div className="text-white">{user.displayName.toString()}</div>
          <div className="text-white">{user.email}</div>
          {/* <div>Confirm</div> */}
        </div>;
      })}
    </div>
  );
}

export default Employees;
