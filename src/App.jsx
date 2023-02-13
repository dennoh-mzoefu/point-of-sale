import { useEffect, useState } from "react";
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
import { Navigate, Route, Routes } from "react-router-dom";
import Sales from "./pages/Sales";
import Store from "./pages/Store";
import MenuPage from "./pages/MenuPage";
import OrderManager from "./pages/OrderManager";
import ExpensePage from "./pages/ExpensePage";
import ExpenseReport from "./pages/ExpenseReport";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function App() {
  const [user, loading] = useAuthState(auth);
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(0);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    // <disv className="w-full bg-slate-200">
    <div className="flex w-full  bg-stone-400  mx-auto min-h-screen">
      <PreApp className="w-0 h-0 " />
      {console.log({ currentUser })}

      {user ? (
        <>
          <div className={screenSize < 900 ? "fixed" : ""}>
            <Sidebar
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              screenSize={screenSize}
              setScreenSize={setScreenSize}
              className=""
            />
          </div>
          <div className="w-full ">
            <Navbar
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              screenSize={screenSize}
              setScreenSize={setScreenSize}
            />

            <div className="w-full overflow-hidden">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/ordermanager" element={<OrderManager />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/sales" element={<Sales />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/expense" element={<ExpensePage />} />
                <Route path="/expenseReport" element={<ExpenseReport />} />
                <Route path="/store" element={<Store />} />
                {user && (
                  <Route path="*" element={<Navigate to="/menu" replace />} />
                )}
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="*" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </div>

    // </div>
  );
}

export default App;
