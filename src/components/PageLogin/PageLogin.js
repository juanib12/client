import { useCallback, useContext, useEffect, useState } from "react";
import { Card, Tab, Tabs } from "@blueprintjs/core";
import Login from "../Login/LoginUser";
import Register from "../Register/RegisterUser";
import Welcome from "../Welcome";
import Loader from "../Loader/Loader";
import { UserContext } from "../context/UserContext";

const PageLogin = () => {
  const [currentTab, setCurrentTab] = useState("login");
  const [userContext, setUserContext] = useContext(UserContext);

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

  console.log(userContext);

  /**
   * Sync logout across tabs
   */
  const syncLogout = useCallback((event) => {
    if (event.key === "logout") {
      // If using react-router-dom, you may call history.push("/")
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("storage", syncLogout);
    return () => {
      window.removeEventListener("storage", syncLogout);
    };
  }, [syncLogout]);

  return userContext.token === null ? (
    <Card elevation="3" className="main-login">
      <div className="center">
        <Tabs
          id="Tabs"
          onChange={setCurrentTab}
          selectedTabId={currentTab}
          className="tab-login"
        >
          <Tab id="login" title="Login" panel={<Login />} />
          <Tab id="register" title="Register" panel={<Register />} />
          <Tabs.Expander />
        </Tabs>
      </div>
    </Card>
  ) : userContext.token ? (
    <Welcome />
  ) : (
    <Loader />
  );
};

export default PageLogin;
