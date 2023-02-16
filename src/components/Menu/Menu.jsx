import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsDot } from "react-icons/bs";
import { v4 } from "uuid";
import { addCurrentOrder } from "../../redux/orderSlice";
import MenuImage from "./MenuImage";

function Menu() {
  const [url, setUrl] = useState("");
  const { menu } = useSelector((state) => state.menu);
  console.log({ menu });
  const dispatch = useDispatch();
  const handleOrder = (item) => {
    dispatch(
      addCurrentOrder({
        ...item,
        quantity: 1,
        isPrepared: false,
        isCancelled: false,
        orderId: v4(),
      })
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-start p-5 shadow-lg bg-stone-100 w-full">
        <h1 className="text-2xl">Menu</h1>
      </div>
      <h4>Food</h4>
      <div className="flex items-center w- flex-wrap  ">
        {menu?.map((item, index) => {
          return (
            <div
              className="flex  justify-center items-center flex-col shadow-lg m-2 bg-white w-fit rounded-lg"
              key={index}
            >
              <div className="flex flex-col w-fit  ">
                {/* <div className="w-0 h-0" onLoad={console.log({ url })}></div> */}
                <MenuImage imageRef={item.imageRef} />
                {/* name */}
                <p className="pt-1  flex pl-5  pr-2">
                  <BsDot />
                  {item.name}
                </p>
                <p className="pt-1 flex pl-5  pr-2">
                  <BsDot />
                  {item.category}
                </p>
                {/* price */}
                <p className="pt-1 flex pl-5  pr-2">
                  <BsDot />
                  Ksh {item.price}
                </p>
              </div>
              <button
                className="bg-slate-400 text-white w-fit rounded-md p-1 mx-auto mb-1"
                onClick={() => handleOrder(item)}
              >
                Place Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
