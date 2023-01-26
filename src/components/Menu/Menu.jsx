import React from "react";
import { useSelector } from "react-redux";

function Menu() {
  const { menu } = useSelector((state) => state.menu);
  console.log({ menu });
  return (
    <div className="flex flex-col items-center">
      <h2>Menu</h2>
      <h4>Snacks</h4>
      <div className="flex justify-around flex-wrap">
        {menu?.map((item, index) => {
          return (
            <div
              className="flex flex-col bg-slate-50 shadow-lg m-2 w-fit rounded-lg"
              key={index}
            >
              <div className="flex flex-col">
                <img
                  className="h-48 w-48 rounded-t-lg"
                  src={item?.image}
                  alt="food pic"
                />
                {/* name */}
                <p className="py-1 pl-10 pr-5">{item.name}</p>
                <p className="py-1 pl-10 pr-5">{item.category}</p>
                {/* price */}
                <p className="py-1 pl-10 pr-5">Ksh {item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
