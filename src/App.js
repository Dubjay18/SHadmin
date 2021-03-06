import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products.js";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Clients from "./pages/Clients";
import TeamMembers from "./pages/TeamMembers";
import { onAuthStateChanged } from "firebase/auth";
import Login from "./pages/Login";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./stateProvider";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

function App() {
  const location = useLocation();
  const [{ user }, dispatch] = useStateValue();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    console.log("close 1");
    setShow(false);
    console.log("close");
  };
  const handleShow = () => {
    setShow(true);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userCred) => {
      if (userCred) {
        dispatch({
          type: "SET_USER",
          user: userCred.displayName,
        });
        dispatch({
          type: "SET_UID",
          uid: userCred.uid,
        });
        console.log(userCred);
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        dispatch({
          type: "SET_UID",
          uid: null,
        });
      }
    });
    return unsubscribe;
  }, [dispatch]);

  if (!user) {
    return <Login />;
  }
  return (
    <div className="h-screen">
      <div className="d-flex h-100">
        <Sidebar show={show} handleClose={handleClose} />
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path={"/"} element={<Home handleShow={handleShow} />} />
            <Route
              path={"/clients"}
              element={<Clients handleShow={handleShow} />}
            />
            <Route
              path={"/products"}
              element={<Products handleShow={handleShow} />}
            />
            <Route
              path={"/teammembers"}
              element={<TeamMembers handleShow={handleShow} />}
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
