import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products.js";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Clients from "./pages/Clients";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./pages/Login";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./stateProvider";

function App() {
  const [{ user, uid }, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userCred) => {
      if (userCred) {
        dispatch({
          type: "SET_USER",
          user: userCred.displayName,
        });
        dispatch({
          type: "SET_UID",
          uid: userCred.uid,
        });
        console.log(userCred);
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        dispatch({
          type: "SET_UID",
          uid: null,
        });
      }
    });
    return unsubscribe;
  }, [dispatch]);

  if (!user) {
    return <Login />;
  }
  return (
    <div className="h-screen">
      <BrowserRouter className="">
        <div className="d-flex h-100">
          <Sidebar />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/clients"} element={<Clients />} />
            <Route path={"/products"} element={<Products />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
