import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import "./App.css";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/products"} element={<Products />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
