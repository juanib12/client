import { Button } from "@mui/material";
import Axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { UserContext } from "../context/UserContext";
import "./GetProducts.css";
import HeaderDetails from "../HeaderDetails/HeaderDetails";
import LoginUser from '../Login/LoginUser'
import Loader from "../Loader/Loader";
import { Navigate, useNavigate } from "react-router";
import Welcome from "../Welcome";

const GetProducts = () => {
  const navigate = useNavigate("")
  const [getProd, setGetProd] = useState([]);
  const [userContext, setUserContext] = useState(UserContext)

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "http://localhost:3002/api/product/articles"
      );
      const data = await response.json();
      setGetProd(data);
    };
    getProducts();
  }, []);

  //   console.log(getProd);

  const verifyUser = useCallback(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/refreshToken", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setUserContext((oldValues) => {
          return { ...oldValues, token: data.token };
        });
      } else {
        setUserContext((oldValues) => {
          return { ...oldValues, token: null };
        });
      }
      // call refreshToken every 5 minutes to renew the authentication token.
      setTimeout(verifyUser, 5 * 60 * 1000);
    });
  }, [setUserContext]);

  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  return userContext.token === null ? (
    <Welcome/>
  ) : !userContext.token ? (
    <Loader />
  ) : (
    <div>
      <HeaderDetails/>
      <div className="container-products">
        <div className="center-products">
          <div className="row-products">
            {getProd.map((prod) => (
              <article key={prod._id} className="card-products">
                <img src={prod.images} width={200} height={200} />
                <h2>{prod.name}</h2>
                <h4>${prod.price}</h4>
                <p>{prod.typeProduct}</p>
                <p>{prod.description}</p>
                <p>{prod.shipping}</p>
                <p>{prod.available}</p>
                <p>{prod.publish}</p>
                <Button variant="outlined">Agregar al carrito</Button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetProducts;
