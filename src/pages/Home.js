import React from "react";
import Nav from "../components/Nav";

import { useStateValue } from "./../stateProvider";
function Home({ handleShow }) {
  const [{ sidebar, user }, dispatch] = useStateValue();
  const handleSidebar = () => {
    dispatch({
      type: "SET_SIDEBAR",
      sidebar: true,
    });
    console.log(user);
  };
  return (
    <div className="w-100">
      <div className="p-3 shadow w-100 d-flex justify-content-between align-items-center">
        <h4>Dashboard</h4>
        <h5 className="d-md-none" onClick={handleShow}>
          Menu
        </h5>
      </div>
      <div>Home</div>
    </div>
  );
}

export default Home;
