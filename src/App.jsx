import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Checkout from "./components/Checkout/Checkout";
import Sidebar from "./components/Sidebar";
// import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { useSelector } from "react-redux";
import PreApp from "./PreApp";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col bg-slate-200">
      <Navbar />
      <PreApp className="w-0 h-0" />

      <div className="flex">
        <Sidebar />
        <Home className="" />
      </div>
      {/* <Login /> */}
      {/* <Admin /> */}
      {/* <Menu /> */}
      {/* <Checkout /> */}
    </div>
  );
}

export default App;
