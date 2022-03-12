import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import GetProducts from "./components/GetProducts/GetProducts";
import AppNuevo from "./AppNuevo";
import { UserProvider } from "./components/context/UserContext";
import Home from "./components/Home/Home";
import Welcome from "./components/Welcome";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<AppNuevo />} />
        <Route path="add_product" element={<AddProduct />} />
        <Route path="get_product" element={<GetProducts />} />
      </Routes>
    </BrowserRouter>
  </UserProvider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
