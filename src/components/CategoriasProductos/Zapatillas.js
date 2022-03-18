import { Button } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import { UserContext } from "../context/UserContext";
import HeaderDetails from "../HeaderDetails/HeaderDetails";
import Loader from "../Loader/Loader";
import Welcome from "../Welcome";
import { TextField } from "@mui/material";

const Zapatillas = () => {
  const [getProd, setGetProd] = useState([]);
  const [userContext, setUserContext] = useState(UserContext);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "http://localhost:3002/api/product/articles_by_type?type=Zapatillas&array"
      );
      const data = await response.json();
      setGetProd(data);
    };
    getProducts();
  }, []);

  console.log(getProd);

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
    <Welcome />
  ) : !userContext.token ? (
    <Loader />
  ) : (
    <div>
      <HeaderDetails />
      <div className="container-products">
        <div className="container-filter">
          <div className="row-products">
            <div className="card-products-filter">
              <p>Ropa</p>
              <h5>Remeras</h5>

              <div className="filters">
                <h6>Costo de envío</h6>
                <p>Gratis</p>
              </div>

              <div className="filters">
                <h6>Precio</h6>
                <p>Hasta $5.000</p>
                <p>$5.000 a $9.500</p>
                <TextField label="Minimo" sx={{ width: "100px" }} />
                <TextField label="Maximo" sx={{ width: "100px" }} />
              </div>

              <div className="filters">
                <h6>Descuentos</h6>
                <p>Desde 5% OFF</p>
                <p>Desde 10% OFF</p>
                <p>Desde 15% OFF</p>
                <p>Desde 20% OFF</p>
                <p>Desde 25% OFF</p>
                <p>Desde 30% OFF</p>
              </div>

              <div className="filters">
                <h6>Marca</h6>
                <p>Puma</p>
                <p>Topper</p>
                <p>Adidas</p>
                <p>Nike</p>
                <p>Converse</p>
              </div>
            </div>
          </div>
        </div>
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
                <Button
                  variant="contained"
                  className="snipcart-add-item"
                  data-item-id={prod._id}
                  data-item-image={prod.images}
                  data-item-name={prod.name}
                  data-item-price={prod.price}
                >
                  Añadir al carro
                </Button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zapatillas;
