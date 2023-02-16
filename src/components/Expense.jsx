import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../redux/expenseSlice";
import { addStockItem } from "../redux/stockSlice";

function Expense() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState("");
  const { stock } = useSelector((state) => state.stock);
  const [otherName, setOtherName] = useState("");
  const [otherQuantity, setOtherQuantity] = useState(0);
  const [otherPrice, setOtherPrice] = useState("");
  // const { stock } = useSelector((state) => state.stock);
  // const [name, setName] = useState('');
  const [filteredNames, setFilteredNames] = useState([]);
  useEffect(() => {
    setFilteredNames(stock);
  }, []);
  console.log({ filteredNames });
  const handleOtherExpenses = () => {
    const category = "other";
    if (otherName && otherQuantity && otherPrice) {
      dispatch(
        addExpense({
          quantity: otherQuantity,
          name: otherName,
          price: otherPrice,
          category,
        })
      );
      setOtherName("");
      setOtherQuantity("");
      setOtherPrice("");
    } else {
      alert("Missing Field");
    }
  };
  const reset = () => {
    setName("");
    setQuantity("");
    setPrice("");
  };
  const handleConfirm = () => {
    const category = "stock";
    if (quantity && name && price && category) {
      console.log(quantity, name, price, category);

      dispatch(addExpense({ quantity, name, price, category }));
      if (category == "stock") {
        dispatch(addStockItem({ name, price, quantity }));
      }
    }
    reset();
  };
  const handleChange = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = stock.filter((item) => {
        return item.name.toLowerCase().includes(keyword.toLowerCase());
      });
      setFilteredNames(results);
      console.log({ keyword });
      console.log({ results });
    } else {
      setFilteredNames([]);
      // setFoundUsers(stock);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };
  return (
    <div className="flex flex-col justify-center items-center mt-3 px-3">
      <h2 className="text-2xl py-2 w-full bg-white text-center ">Expense</h2>
      <div className="flex flex-wrap mt-5 w-full justify-around">
        <div className=" flex flex-col  p-3 bg-white">
          <h3>Stock Expenses</h3>
          <div className="flex flex-col">
            <div className="flex w-80 bg-slate-100 p-2 my-2">
              <p>Enter Item:</p>
              <input
                value={name}
                // onChange={(e) => setName(e.target.value)}
                onChange={(e) => handleChange(e)}
                type="text"
                className="w-full  border-b border-black "
                placeholder="Eg: tomato"
              />
            </div>
            <div className="z-10 flex flex-col items-center">
              {console.log(filteredNames)}
              {name &&
                filteredNames?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col shadow-xl mb-1 w-2/3  bg-stone-100"
                      onClick={() => setName(item.name)}
                    >
                      {item.name}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="flex text-sm bg-slate-100 p-2 my-2">
            <p>Enter Total Price:</p>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              min="0"
              className="w-full  border-b border-black "
              placeholder="Amount Spent"
            />
          </div>
          <div className="flex bg-slate-100 p-2 my-2">
            <p className="text-sm">Enter Total Quantity:</p>
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              min="0"
              className="w-full  border-b border-black "
              placeholder="Eg: tomato"
            />
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => handleConfirm()}
              className="px-2 py-1 bg-stone-400 font-bold text-slate-50"
            >
              Confirm
            </button>
            <button
              onClick={() => reset()}
              className="px-3 py-1 bg-slate-400 font-bold text-white"
            >
              Reset
            </button>
          </div>
        </div>

        {/* other expenses */}
        <div className="flex flex-col  p-3 bg-white">
          <h3>Other Expenses</h3>
          <div className="w-80">
            <div className="flex bg-stone-100 p-2 my-2 min-w-96">
              <p>Enter Item:</p>
              <input
                value={otherName}
                onChange={(e) => setOtherName(e.target.value)}
                type="text"
                className="w-full border-b-2 border-b-stone-700 "
                placeholder="Eg: transport"
              />
            </div>
            <div className="flex text-sm bg-stone-100 p-2 my-2">
              <p>Enter Total Price:</p>
              <input
                value={otherPrice}
                onChange={(e) => setOtherPrice(e.target.value)}
                type="number"
                min="0"
                className="w-full border-b-2 border-b-stone-700 "
                placeholder="Amount spent"
              />
            </div>
            <div className="flex bg-stone-100 p-2 my-2">
              <p className="text-sm">Enter Total Quantity:</p>
              <input
                value={otherQuantity}
                onChange={(e) => setOtherQuantity(e.target.value)}
                type="text"
                className="w-full border-b-2 border-b-stone-700"
                placeholder="Quantity bought"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => handleOtherExpenses()}
                className="px-2 py-1 bg-stone-400 font-bold text-slate-50"
              >
                Confirm
              </button>
              <button
                onClick={() => reset()}
                className="px-3 py-1 bg-slate-400 font-bold text-white"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expense;
