import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addOrder, deleteCurrentOrder } from "../../redux/orderSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PreOrderItem({ item }) {
  useEffect(() => {
    setQuantity(item.quantity);
  }, [item]);
  const [quantity, setQuantity] = useState(parseInt(item.quantity));
  let a = item.price;
  const [price, setPrice] = useState(item.price);
  const dispatch = useDispatch();

  const AddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const LowerQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  useEffect(() => {
    quantity < 0 && setQuantity(0);
  }, [quantity]);
  const confirmOrder = () => {
    try {
      dispatch(
        addOrder({
          orderId: item.orderId,
          quantity,
          name: item.name,
          price,
          isPrepared: false,
          isCancelled: false,
        })
      );
    } catch (error) {
      notifyError();
      return;
    }
    notifySuccess();
  };
  const DeleteOrder = () => {
    dispatch(deleteCurrentOrder(item.orderId));
  };
  useEffect(() => {
    setPrice(quantity * a);
  }, [quantity]);

  // toasts
  const notify = () => toast("Added!");
  const notifySuccess = () =>
    toast.success("Order Added", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifyError = () =>
    toast.error("Error Occured", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  return (
    <div className="flex shadow-xl mb-2 ">
      <div className="flex flex-col  mr-3 ">
        <div className="bg-stone-200 text-white-500 pl-2  w-36 rounded-md shadow-xl">
          <h3>{item.name}</h3>
          <h3>Ksh {price}</h3>
        </div>
      </div>
      <div>
        <div className="flex items-center mb-2">
          <button
            className="px-1 mx-1 shadow-md bg-indigo-400 text-slate-900"
            onClick={() => AddQuantity()}
          >
            +
          </button>
          <p>{quantity}</p>
          <button
            className="px-1 mx-1 shadow-md bg-purple-400 text-slate-900"
            onClick={() => LowerQuantity()}
          >
            -
          </button>
        </div>
        <div className="flex">
          <button
            className="border bg-slate-600 px-1 text-sm text-white hover:bg-stone-300"
            onClick={() => confirmOrder()}
          >
            Confirm{" "}
          </button>
          <button
            className="border bg-slate-600 p-2 text-sm text-white hover:bg-red-300"
            onClick={() => DeleteOrder()}
          >
            Delete{" "}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default PreOrderItem;
