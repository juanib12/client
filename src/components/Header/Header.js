import "./header.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

function Header() {
  const [namesProds, setNamesProds] = useState([])


  return (
    <div>
      <header>
        <div className="container-main">
          <h1 className="title">Shopty</h1>
          <div className="container">
            <Formik
              initialValues={{name: ""}}
              onSubmit={async (values) => {
                const response = await fetch(`http://localhost:3002/api/product/articles_by_name?name=${values.name}`)
                const data = await response.json();
                setNamesProds(data.data);
              }}
            >
              <Form>
                <Field name="name" placeholder="Buscar por nombre..." className="container__input" />
              </Form>
            </Formik>
            {/* <!-- Text input --> */}
            {/* <input
              type="text"
              className="container__input"
              placeholder="Buscar..."
            /> */}

            {/* <!-- Search icon sticks to the left or right --> */}
            <i class="bx bx-search icon"></i>
          </div>

          <ul class="dropdown">
              <Link to="/" className="link-header">Inicio</Link>
              <li>
                <div>Categorías</div>
                <ul>
                  <li>Remeras</li>
                  <li>Pantalones</li>
                  <li>
                    <div>Hombre</div>
                    <ul>
                      <li className="items-header">Remeras</li>
                      <li>Pantalones</li>
                      <li>Buzos</li>
                      <li>Zapatillas</li>
                    </ul>
                  </li>
                  <li>
                    <div>Mujer</div>
                    <ul>
                      <li>Remeras</li>
                      <li>Pantalones</li>
                      <li>Buzos</li>
                      <li>Zapatillas</li>
                    </ul>
                  </li>
                  <li>Moda Invierno</li>
                  <li>Moda Verano</li>
                </ul>
              </li>
              <li>Ofertas</li>
              <li>Ayuda</li>
            </ul>

          <div className="container-log">
            <Link className="link-header-login" to="login">Ingresá</Link>
            <Link className="link-header-register" to="login">Registrate</Link>
            <a href="#">
              <i class="bx bx-cart-alt"></i>
            </a>
          </div>
        </div>
      </header>

      <div>
        <div>
          {namesProds.map((names) => (
            <article key={names._id}>
              <h1>{names.name}</h1>
              <h3>{names.price}</h3>
              <p>{names.description}</p>
              <img src={names.images} />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
