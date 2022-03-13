import { Button } from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Loader from "../Loader/Loader";
import "../Header/header.css";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";

const HeaderDetails = () => {
  const [userContext, setUserContext] = useContext(UserContext);
  const [namesProds, setNamesProds] = useState([]);

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
  };

  return (
    <div>
      <header>
        <div className="container-main">
          <Link to="../login" className="link-header">
            <h1 className="title">Shopty</h1>
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

          <ul class="dropdown">
            {/* <Link to="/" className="link-header">
              Inicio
            </Link> */}
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

            <ul className="dropdown-user">
              <li>
                  <img
                    src={userContext.details.avatar}
                    width="50"
                    height="50"
                  />
                <ul>
                  <Link className="link-user" to="../myaccount"><li>Mi cuenta</li></Link>
                  <Link className="link-user" to="../mypurchase"><li>Mis compras</li></Link>
                  <Link className="link-user" to="../help"><li>Ayuda</li></Link>
                </ul>
              </li>
            </ul>
            {/* <p>
              <strong>
                {userContext.details.firstName}
                {userContext.details.lastName &&
                  " " + userContext.details.lastName}
              </strong>
            </p>
            <img src={userContext.details.avatar} width="50" height="50" /> */}
          <div className="user-actions">
            <Button onClick={logoutHandler} variant="outlined">
              Salir
            </Button>
            {/* <Button text="Refetch" intent="primary" onClick={refetchHandler} /> */}
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
