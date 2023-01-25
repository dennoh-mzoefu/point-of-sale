import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Checkout from "./components/Checkout/Checkout";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { useSelector } from "react-redux";
import PreApp from "./PreApp";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Sales from "./pages/Sales";
import Employees from "./pages/Employees";
import Expenses from "./pages/Expenses";
import Store from "./pages/Store";

function App() {
  return (
    <div className="flex flex-col bg-slate-200">
      <Navbar />
      <PreApp className="w-0 h-0" />
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>

      {/* <Login /> */}
      {/* <Admin /> */}
      {/* <Menu /> */}
      {/* <Checkout /> */}
    </div>
  );
}

export default App;
