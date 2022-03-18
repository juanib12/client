import { Button } from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";
import Loader from "../components/Loader/Loader";
import "../components/Header/header.css";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Home from "./Home/Home";
import "../components/Carousel/carousel.css";
import CarouselSlider from "../components/Carousel/Carousel-slider";
import Features from "../components/Features/Features";
import PaperPayment from "../components/PaperPayment/PaperPayment";
import CarouselMarcas from "../components/Carousel/CarouselMarcas";
import CategoriasHome from "../components/CategoriasHome/CategoriasHome";
import Adicionales from "../components/Adicionales/Adicionales";
import Footer from "../components/Footer/Footer";
import HeaderDetails from "../components/HeaderDetails/HeaderDetails";
import Error from "./Error";

const Welcome = () => {
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

  const refetchHandler = () => {
    // set details to undefined so that spinner will be displayed and
    // fetchUserDetails will be invoked from useEffect
    setUserContext((oldValues) => {
      return { ...oldValues, details: undefined };
    });
  };
  console.log(userContext);

  return userContext.details === null ? (
    <Home />
  ) : !userContext.details ? (
    <Loader />
  ) : (
    <div>
      <HeaderDetails />
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
      <CarouselSlider />
      <PaperPayment />
      <Features />
      <CarouselMarcas />
      <CategoriasHome />
      <Adicionales />
      <Footer />
    </div>
  );
};

export default Welcome;
