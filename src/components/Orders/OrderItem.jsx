import React, { useState } from "react";

function OrderItem({ order }) {
  const [ordermanaged, setorderManaged] = useState(order);
  return (
    <div>
      <tr>
        <td>{ordermanaged.name}</td>
        <td>2</td>
        <td>{ordermanaged.price}</td>
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
    </div>
  );
}

export default OrderItem;
