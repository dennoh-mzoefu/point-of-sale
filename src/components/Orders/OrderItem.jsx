import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineDone } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteOrder, doneOrder } from "../../redux/orderSlice";
function OrderItem({ order, index }) {
  const [ordermanaged, setorderManaged] = useState(order);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteOrder(order.id));
  };
  const handleDone = () => {
    // console.log(order.id);
    dispatch(doneOrder(order.id));
  };
  return (
    <tbody>
      {order.isPrepared == false && order.isPaid == false && (
        <tr
          className={
            index % 2 == 1
              ? "bg-slate-300 text-black p-1 text-xl"
              : "bg-slate-800 text-white p-1 text-xl"
          }
        >
          <td className="p-1">{order.name}</td>
          <td className="p-1">{order.quantity}</td>
          <td className="p-1">{order.price}</td>
          <td className="p-1">
            <MdOutlineDone
              onClick={() => handleDone()}
              className="rounded-full bg-white border text-black cursor-pointer"
            />
          </td>
          <td className="p-1">
            <ImCancelCircle className="cursor-pointer" />
          </td>
          <td className="p-1 ">
            <button className="">
              <AiFillDelete onClick={() => handleDelete()} />
            </button>
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default OrderItem;
