import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import GetProducts from "./components/GetProducts/GetProducts";
import AppNuevo from "./AppNuevo";
import { UserProvider } from "./components/context/UserContext";
import PageLogin from "./components/PageLogin/PageLogin";
import MyAccount from "./components/MyAccount/MyAccount";
import Home from "./components/Home/Home";
import Remeras from "./components/CategoriasProductos/Remeras";
import Pantalones from "./components/CategoriasProductos/Pantalones";
import BuzosCamperas from "./components/CategoriasProductos/BuzosCamperas";
import Zapatillas from "./components/CategoriasProductos/Zapatillas";
import Deportivo from "./components/CategoriasProductos/Deportivo";
import Moda from "./components/CategoriasProductos/Moda";
import Hombre from "./components/CategoriasProductos/Hombre";
import Mujer from "./components/CategoriasProductos/Mujer";
import Invierno from "./components/CategoriasProductos/Invierno";
import Verano from "./components/CategoriasProductos/Verano";
import Carro from './components/Carro/Carro'
import Producto from "./components/Producto";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="add_product" element={<AddProduct />} />
        <Route path="get_product" element={<GetProducts />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/remeras" element={<Remeras />} />
        <Route path="/pantalones" element={<Pantalones />} />
        <Route path="/buzos-camperas" element={<BuzosCamperas />} />
        <Route path="/zapatillas" element={<Zapatillas />} />
        <Route path="/deportivo" element={<Deportivo />} />
        <Route path="/moda" element={<Moda />} />
        <Route path="/hombre" element={<Hombre />} />
        <Route path="/mujer" element={<Mujer />} />
        <Route path="/invierno" element={<Invierno />} />
        <Route path="/verano" element={<Verano />} />
        <Route path="/carro" element={<Carro />}/>
        <Route path="/producto" element={<Producto/>} />
      </Routes>
    </BrowserRouter>
  </UserProvider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
