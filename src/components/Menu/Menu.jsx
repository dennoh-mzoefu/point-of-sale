import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCurrentOrder } from "../../redux/orderSlice";
import MenuImage from "./MenuImage";

function Menu() {
  const [url, setUrl] = useState("");
  const { menu } = useSelector((state) => state.menu);
  console.log({ menu });
  const dispatch = useDispatch();
  const handleOrder = (item) => {
    console.log({ item });
    dispatch(addCurrentOrder(item));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-start p-9 shadow-lg bg-white w-full">
        <h1 className="text-2xl">Menu</h1>
      </div>
      <h4>Snacks</h4>
      <div className="flex  flex-wrap">
        {menu?.map((item, index) => {
          return (
            <div
              className="flex flex-col bg-white shadow-lg m-2 w-fit rounded-lg"
              key={index}
            >
              <div className="flex flex-col">
                {/* <div className="w-0 h-0" onLoad={console.log({ url })}></div> */}
                <MenuImage imageRef={item.imageRef} />
                {/* name */}
                <p className="py-1 pl-10 pr-5">{item.name}</p>
                <p className="py-1 pl-10 pr-5">{item.category}</p>
                {/* price */}
                <p className="py-1 pl-10 pr-5">Ksh {item.price}</p>
              </div>
              <button onClick={() => handleOrder(item)}>Place Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
