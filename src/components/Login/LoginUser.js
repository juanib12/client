import { Callout, FormGroup, InputGroup } from "@blueprintjs/core";
import React, { useContext, useState } from "react";
import { UserContext } from '../context/UserContext'
import { TextField, Button } from "@mui/material";
import './Login.css'

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userContext, setUserContext] = useContext(UserContext);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const genericErrorMessage = "Something went wrong! Please try again later.";

    fetch(process.env.REACT_APP_API_ENDPOINT + "users/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password }),
    })
      .then(async (response) => {
        setIsSubmitting(false);
        if (!response.ok) {
          if (response.status === 400) {
            setError("Please fill all the fields correctly!");
          } else if (response.status === 401) {
            setError("Invalid email and password combination.");
          } else {
            setError(genericErrorMessage);
          }
        } else {
          const data = await response.json();
          setUserContext((oldValues) => {
            return { ...oldValues, token: data.token };
          });
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        setError(genericErrorMessage);
      });
  };
  return (
    <>
      {error && <Callout className="error-login" intent="danger">{error}</Callout>}
      <form onSubmit={formSubmitHandler} className="form-login">
        <FormGroup labelFor="email">
          <h2>¡Hola! Para seguir, ingresá tu email y contraseña.</h2>
          <TextField
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="textfield"
          />
        </FormGroup>
        <FormGroup labelFor="password">
          <TextField
            id="password"
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="textfield"
            variant="outlined"
          />
        </FormGroup>
        <Button
          variant="contained"
          disabled={isSubmitting}
          text={`${isSubmitting ? "Signing In" : "Sign In"}`}
          type="submit"
        >
          Iniciar sesion
        </Button>
        {/* <Button className="link-login" variant="outlined">
          CREAR CUENTA
        </Button> */}
      </form>
    </>
  );
};

export default Login;
