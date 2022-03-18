import { useState, useEffect, useCallback } from "react";
import HeaderDetails from "./HeaderDetails/HeaderDetails";
import Loader from "./Loader/Loader";
import Welcome from "./Welcome";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { UserContext } from "./context/UserContext";
import { Modal, Button } from "@mui/material";

const Producto = () => {
  const [open, setOpen] = useState(false);

  const [getProd, setGetProd] = useState([]);
  const [userContext, setUserContext] = useState(UserContext);

  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  const [nameItem, setNameItem] = useState("");
  const [priceItem, setPriceItem] = useState("");

  //abrir modal
  const handleOpen = () => {
    setOpen(true);
    setShow(true);
  };
  const handleClose = () => {
    setOpen(false);
    setShow(false);
  };

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: getProd[0].name,
            amount: {
              currency_code: "USD",
              value: getProd[0].price,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  console.log(priceItem);

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(
        "http://localhost:3002/api/product/articles_by_type?type=Remeras&array"
      );
      const data = await response.json();
      setGetProd(data);
    };
    getProducts();
  }, []);

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
    <PayPalScriptProvider
      options={{
        "client-id":
          "AQKKANHkrLYsH3HFKRVBPBxKD9ok3PrgAU2M5dfOlWdtctwEFT_1YcgIxhWyMtmPN5k-cPMD8X3wn67j",
      }}
    >
      <div>
        <HeaderDetails />
        <div></div>
      </div>

      <Modal open={open} onClose={handleClose} className="modal-paypal">
        {show ? (
          <div className="form-paypal">
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={createOrder}
              onApprove={onApprove}
            />
            <Button variant="outlined" onClick={handleClose}>
              Cancelar
            </Button>
          </div>
        ) : null}
      </Modal>
    </PayPalScriptProvider>
  );
};

export default Producto;
