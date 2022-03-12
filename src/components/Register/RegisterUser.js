import { Callout, FormGroup, InputGroup } from "@blueprintjs/core";
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { TextField, Button } from "@mui/material";
import './Register.css'

const Register = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userContext, setUserContext] = useContext(UserContext);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const genericErrorMessage = "Something went wrong! Please try again later.";

    fetch(process.env.REACT_APP_API_ENDPOINT + "users/signup", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        username: email,
        password,
        avatar,
      }),
    })
      .then(async (response) => {
        setIsSubmitting(false);
        if (!response.ok) {
          if (response.status === 400) {
            setError("Please fill all the fields correctly!");
          } else if (response.status === 401) {
            setError("Invalid email and password combination.");
          } else if (response.status === 500) {
            console.log(response);
            const data = await response.json();
            if (data.message) setError(data.message || genericErrorMessage);
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
      {error && <Callout className="error-register" intent="danger">{error}</Callout>}

      <form onSubmit={formSubmitHandler} className="form-register" >
        <FormGroup labelFor="firstName">
          <h2>¡Hola! Para seguir, ingresá los siguientes datos.</h2>
          <TextField
            id="firstName"
            label="Nombre"
            className="textfield"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </FormGroup>
        <FormGroup labelFor="firstName">
          <TextField
            id="lastName"
            label="Apellido"
            className="textfield"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </FormGroup>
        <FormGroup labelFor="email">
          <TextField
            id="email-register"
            type="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="textfield"
          />
        </FormGroup>
        <FormGroup labelFor="password">
          <TextField
            id="password-register"
            label="Contraseña"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="textfield"
          />
        </FormGroup>
        <FormGroup labelFor="avatar">
          <TextField
            id="avatar"
            type="text"
            label="Avatar"
            onChange={(e) => setAvatar(e.target.value)}
            value={avatar}
            className="textfield"
          />
        </FormGroup>
        <Button
          disabled={isSubmitting}
          text={`${isSubmitting ? "Registering" : "Register"}`}
          variant="contained"
          type="submit"
        >
          Crear Cuenta
        </Button>
        {/* <Button className="link-login" variant="outlined">
          Iniciar sesion
        </Button> */}
      </form>
    </>
  );
};

export default Register;
