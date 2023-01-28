import React, { useState } from "react";
import { useSelector } from "react-redux";

function Orders() {
  const { currentOrders } = useSelector((state) => state.order);
  const [ordermanaged, setorderManaged] = useState(null);
  return (
    <div>
      {currentOrders?.map((item) => {
        return (
          <div>
            {console.log(item, "orders")}
            <table>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Done</th>
                <th>Cancelled</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td>{item.name}</td>
                <td>2</td>
                <td>{item.price}</td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default Orders;
