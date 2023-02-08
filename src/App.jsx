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
// import Expenses from "./pages/Expenses";
import Store from "./pages/Store";
import MenuPage from "./pages/MenuPage";
import OrderManager from "./pages/OrderManager";
import ExpensePage from "./pages/ExpensePage";
import ExpenseReport from "./pages/ExpenseReport";

function App() {
  return (
    // <div className="w-full bg-slate-200">
    <div className="flex w-full bg-slate-100  mx-auto min-h-screen">
      <div className="">
        <Sidebar className="" />
      </div>
      <div className="w-full ">
        <Navbar />
        <PreApp className="w-0 h-0 " />
        <div className="w-full overflow-hidden">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/ordermanager" element={<OrderManager />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/expense" element={<ExpensePage />} />
            <Route path="/expenseReport" element={<ExpenseReport />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </div>
      </div>
    </div>

    // </div>
  );
}

export default App;
