import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products.js";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Clients from "./pages/Clients";

function App() {
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
