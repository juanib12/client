import { Button } from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Loader from "../Loader/Loader";
import "../Header/header.css";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router";

const HeaderDetails = () => {
  //responsive
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const [userContext, setUserContext] = useContext(UserContext);
  const [namesProds, setNamesProds] = useState([]);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  const fetchUserDetails = useCallback(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/me", {
      method: "GET",
      credentials: "include",
      // Pass authentication token as bearer token in header
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userContext.token}`,
      },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setUserContext((oldValues) => {
          return { ...oldValues, details: data };
        });
      } else {
        if (response.status === 401) {
          // Edge case: when the token has expired.
          // This could happen if the refreshToken calls have failed due to network error or
          // User has had the tab open from previous day and tries to click on the Fetch button
          window.location.reload();
        } else {
          setUserContext((oldValues) => {
            return { ...oldValues, details: null };
          });
        }
      }
    });
  }, [setUserContext, userContext.token]);

  useEffect(() => {
    // fetch only when user details are not present
    if (!userContext.details) {
      fetchUserDetails();
    }
  }, [userContext.details, fetchUserDetails]);

  const logoutHandler = () => {
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/logout", {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userContext.token}`,
      },
    }).then(async (response) => {
      setUserContext((oldValues) => {
        return { ...oldValues, details: undefined, token: null };
      });
      window.localStorage.setItem("logout", Date.now());
    });
    navigate("../login", { replace: true });
  };

  return (
    <div>
      <header>
        <div className="container-main">
          <Link to="../login" className="link-header">
            <div className="logo">
              <h1 className="title">Shopty</h1>
            </div>
          </Link>
          <div className="container">
            <Formik
              initialValues={{ name: "" }}
              onSubmit={async (values) => {
                const response = await fetch(
                  `http://localhost:3002/api/product/articles_by_name?name=${values.name}`
                );
                const data = await response.json();
                setNamesProds(data.data);
                console.log(namesProds);
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
            <i class="bx bx-search icon"></i>
          </div>

          <nav>
            {(toggleMenu || screenWidth > 500) && (
              <ul class="dropdown">
                {/* <Link to="/" className="link-header">
            Inicio
          </Link> */}
                <li className="items-nav">
                  Categorías
                  {/* <ul>
              <Link to="../Remeras" className="link-header-drop">
                <li>Remeras</li>
              </Link>
              <Link to="../Pantalones" className="link-header-drop">
                <li>Pantalones</li>
              </Link>
              <Link to="../Hombre" className="link-header-drop">
                <li>Hombre</li>
              </Link>
              <Link to="../Mujer" className="link-header-drop">
                <li>Mujer</li>
              </Link>
              <Link to="../Invierno" className="link-header-drop">
                <li>Moda Invierno</li>
              </Link>
              <Link to="../Verano" className="link-header-drop">
                <li>Moda Verano</li>
              </Link>
            </ul> */}
                </li>
                <li className="items-nav">Ofertas</li>
                <li className="items-nav">Ayuda</li>
              </ul>
            )}
          </nav>

          <ul className="dropdown-user">
            <li>
              <h5>{userContext.details.firstName}</h5>
              <i class="bx bxs-chevron-down-square"></i>
              <ul>
                <Link className="link-user" to="../myaccount">
                  <li>Mi cuenta</li>
                </Link>
                <Link className="link-user" to="../mypurchase">
                  <li>Mis compras</li>
                </Link>
                <Link className="link-user" to="../help">
                  <li>Ayuda</li>
                </Link>
                <Button onClick={logoutHandler} variant="outlined">
                  Salir
                </Button>
              </ul>
            </li>
          </ul>
          <div className="carrito">
            <button class="snipcart-checkout link-carro">
              <i class="bx bxs-shopping-bag"></i>
            </button>
          </div>
        </div>
      </header>

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
  );
};

export default HeaderDetails;
