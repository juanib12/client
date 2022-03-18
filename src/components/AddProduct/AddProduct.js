import "./AddProduct.css";
import Axios from "axios";
import { TextField, Button, Input } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderDetails from "../HeaderDetails/HeaderDetails";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [descrip, setDescrip] = useState("");
  const [precio, setPrecio] = useState("");
  const [tipo, setTipo] = useState("");
  const [img, setImg] = useState("");

  const [oferta, setOferta] = useState("");

  const add_product = () => {
    Axios.post("http://localhost:3002/api/product/article", {
      name: name,
      description: descrip,
      price: precio,
      oferta: oferta,
      typeProduct: tipo,
      shipping: true,
      available: true,
      sold: 0,
      publish: true,
      images: img,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <HeaderDetails />
      <div className="container-add">
        <div className="form-add">
          <div className="center-add">
            <TextField
              variant="outlined"
              label="Nombre"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="center-add">
            <TextField
              variant="outlined"
              label="Descripcion"
              onChange={(e) => setDescrip(e.target.value)}
            />
          </div>
          <div className="center-add">
            <TextField
              variant="outlined"
              label="Precio"
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>
          <div className="center-add">
            <TextField
              variant="outlined"
              label="Tipo"
              onChange={(e) => setTipo(e.target.value)}
            />
          </div>
          <div className="center-add">
            <TextField
              type="text"
              label="Imagen"
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <div className="center-add">
            <TextField
              label="Oferta"
              type="text"
              onChange={(e) => setOferta(e.target.value)}
            />
          </div>
          <div className="center-add">
            <Button variant="contained" onClick={add_product}>
              Añadir producto
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
