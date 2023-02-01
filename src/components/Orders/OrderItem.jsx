import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../../redux/orderSlice";
function OrderItem({ order, index }) {
  const [ordermanaged, setorderManaged] = useState(order);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteOrder(order.id));
  };
  return (
    <tbody>
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
          <input type="checkbox" />
        </td>
        <td className="p-1">
          <input type="checkbox" />
        </td>
        <td className="p-1 ">
          <button className="">
            <AiFillDelete onClick={() => handleDelete()} />
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default OrderItem;
