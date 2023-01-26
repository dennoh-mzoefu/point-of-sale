import React, { useEffect, useState } from "react";
import { addMenu, fetchMenu } from "../redux/menuSlice";
import { useDispatch } from "react-redux";
function AddStock() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(6);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      addMenu({
        name,
        category,
        price,
      })
    );
  };
  return (
    <div>
      <div className="bg-red-500 flex flex-col justify-center items-center w-full">
        <h2>Add food item to menu</h2>
        <div className="flex flex-col justify-center items-center ">
          <input
            type="text"
            placeholder="Category"
            value={category}
            classes=" bg-slate-200 mb-2"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            classes=" bg-slate-200 mb-2 w-fit"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            classes=" bg-slate-200 mb-2"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button classes="bg-black w-fit" onClick={(e) => handleClick(e)}>
            click me
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddStock;
