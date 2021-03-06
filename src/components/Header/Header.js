import "./header.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useState, useEffect } from "react";

function Header() {
  const [namesProds, setNamesProds] = useState([]);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  console.log(namesProds)

  return (
    <div>
      <header>
        <div className="container-main">
          <h1 className="title">Shopty</h1>
          <div className="container">
            <Formik
              initialValues={{ name: "" }}
              onSubmit={async (values) => {
                const response = await fetch(
                  `http://localhost:3002/api/product/articles_by_name?name=${values.name}`
                );
                const data = await response.json();
                setNamesProds(data.data);
                console.log(namesProds)
              }}
            >
              <Form>
                <Field
                  name="name"
                  placeholder="Buscar por nombre..."
                  className="container__input"
                />
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

          <nav>
            {(toggleMenu || screenWidth > 500) && (
              <ul class="dropdown">
                <li className="items-nav">Categorías</li>
                <li className="items-nav">Ofertas</li>
                <li className="items-nav">Ayuda</li>
              </ul>
            )}
          </nav>

          <div className="container-log">
            <Link className="link-header-login" to="login">
              Ingresá
            </Link>
            <Link className="link-header-register" to="login">
              Registrate
            </Link>
          </div>
          <div className="carrito">
            <button class="snipcart-checkout link-carro">
              <i class="bx bxs-shopping-bag"></i>
            </button>
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
