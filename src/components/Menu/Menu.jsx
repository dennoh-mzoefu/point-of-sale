import React from "react";
import "./style.css";
import { food } from "../../assets/dummy";
import { useSelector } from "react-redux";

function Menu() {
  const { menu } = useSelector((state) => state.menu);
  console.log({ menu });
  return (
    <div className="menu">
      <h2>Menu</h2>
      <h4>Snacks</h4>
      <div className="aboveMenu">
        {menu?.map((item, index) => {
          return (
            <div className="wholeMenu" key={index}>
              <div className="menuItem">
                <img className="menuImage" src={item?.image} alt="food pic" />
                {/* name */}
                <p className="menuDesc">{item.name}</p>
                <p className="menuDesc">{item.category}</p>
                {/* price */}
                <p className="menuDesc">Ksh {item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
