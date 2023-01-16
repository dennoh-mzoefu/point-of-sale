import { useState } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Checkout from "./components/Checkout/Checkout";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <h1 className="text-cyan-900">Hello world</h1>
      {/* <Sidebar /> */}
      <Login />
      {/* <Menu /> */}
      {/* <Checkout /> */}
    </div>
  );
}

export default App;
