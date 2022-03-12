import "./AddProduct.css";
import Axios from "axios";
import { TextField, Button, Input } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [descrip, setDescrip] = useState("");
  const [precio, setPrecio] = useState("");
  const [tipo, setTipo] = useState("");
  const [img, setImg] = useState("");

  const [auth, setAuth] = useState("")

  const add_product = () => {
    Axios.post("http://localhost:3002/api/product/article", {
      name: name,
      description: descrip,
      price: precio,
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

//   useEffect(() => {
//       const getAuth = async () => {
//           const response = await fetch("http://localhost:3002/api/users/auth")
//           const data = await response.json();
//           setAuth(data.results)
//       }
//       getAuth()
//   }, [])

  return (
    <div>
      <div>
        <TextField variant="outlined" label="Nombre" onChange={(e) => setName(e.target.value)}/>
        <TextField variant="outlined" label="Descripcion" onChange={(e) => setDescrip(e.target.value)}/>
        <TextField variant="outlined" label="Precio" onChange={(e) => setPrecio(e.target.value)}/>
        <TextField variant="outlined" label="Tipo" onChange={(e) => setTipo(e.target.value)}/>
        <Input type="text" label="Imagenes" onChange={(e) => setImg(e.target.value)}/>
        <Button variant="contained" onClick={add_product}>Añadir producto</Button>
      </div>
    </div>
  );
};

export default AddProduct;
