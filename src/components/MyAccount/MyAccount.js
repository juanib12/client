import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import "../Header/header.css";
import { Link } from "react-router-dom";
import HeaderDetails from "../HeaderDetails/HeaderDetails";
import "./MyAccount.css";
import Home from "../Home/Home";
import Loader from "../Loader/Loader";
import { Button, Input } from "@mui/material";

const MyAccount = () => {
  const [userContext, setUserContext] = useContext(UserContext);

  const [direcc, setDirecc] = useState(false);
  const [addDirecc, setAddDirecc] = useState(false);

  const [direcc2, setDirecc2] = useState("")

  const handleDirecc = () => {
    setDirecc(true);
  };

  const handleAdd_Direcc = () => {
    setAddDirecc(true)
    setDirecc2(direcc2)
    setDirecc(false)
  }

  console.log(addDirecc)

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
          <div className="circle-tarjeta">
            <h3>+</h3>
          </div>

          <h4>Domicilios</h4>
          <div className="circle-tarjeta">
            <button className="btn-add" onClick={handleDirecc}>
              +
            </button>
          </div>
          <div className="paper-account2">
            <h5>Domicilio 1</h5>
            <p>{userContext.details.addres}</p>
          </div>

          {direcc ===
            true ? (
              <div className="paper-account2">
                <h5>Domicilio 2</h5>
                <Input onChange={(e) => setDirecc2(e.target.value)}/>
                <Button variant="outlined" onClick={handleAdd_Direcc}>Añadir</Button>
              </div>
            ): null}
            {addDirecc === true ? (
                <div className="paper-account2">
                  <h5>Domicilio 2</h5>
                  <p>{direcc2}</p>
                </div>
            ): null}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
