import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import "../Header/header.css";
import { Link } from "react-router-dom";
import HeaderDetails from "../HeaderDetails/HeaderDetails";
import "./MyAccount.css";
import Home from '../Home/Home'
import Loader from '../Loader/Loader'

const MyAccount = () => {
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

  return userContext.details === null ? (
    <Home />
  ) : !userContext.details ? (
    <Loader />
  ) : (
    <div>
      <HeaderDetails />
      {/* <p>
        <strong>
          {userContext.details.firstName}
          {userContext.details.lastName && " " + userContext.details.lastName}
        </strong>
      </p> */}
      <div className="container-account">
        <div className="center-account">
          <h1>Mis datos</h1>

          <h4>Datos de cuenta</h4>
          <div className="paper-account">
            <h5>Usuario</h5>
            <p>{userContext.details.username}</p>
          </div>
          <div className="paper-account2">
            <h5>Perfil</h5>
            <img src={userContext.details.avatar} width="50" height="50" />
          </div>

          <h4>Datos personales</h4>
          <div className="paper-account">
            <h5>Nombre</h5>
            <p>{userContext.details.firstName}</p>
          </div>
          <div className="paper-account2">
            <h5>Apellido</h5>
            <p>{userContext.details.lastName}</p>
          </div>

          <h4>Tarjetas</h4>
          <div className="paper-account">
            <h5>Nombre</h5>
            <p>{userContext.details.firstName}</p>
          </div>
          <div className="paper-account2">
            <h5>Apellido</h5>
            <p>{userContext.details.lastName}</p>
          </div>

          <h4>Domicilios</h4>
          <div className="paper-account">
            <h5>Nombre</h5>
            <p>{userContext.details.firstName}</p>
          </div>
          <div className="paper-account2">
            <h5>Apellido</h5>
            <p>{userContext.details.lastName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
